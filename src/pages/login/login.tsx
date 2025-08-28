import { useState } from "react";
import { useAuth } from "../../shared/contexts/auth-context";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import useForm, { FormField } from "../../shared/hooks/use-form/use-form";
import Button from "../../library/button/button";
import Section from "../../components/section/section";
import { pageRoutes } from "../../shared/constants";
import { UseAuth } from "../../shared/types";

import "./login.scss";

const initLoginFields: FormField[] = [
  {
    label: "Email",
    name: "email",
    isRequired: true,
    type: "email",
  },
  {
    label: "Password",
    name: "password",
    isRequired: true,
    type: "password",
  },
];

function Login() {
  const { formFields, handleBlur, handleChange, isError } =
    useForm(initLoginFields);
  const emailField = formFields.find((field) => field.name === "email");
  const passwordField = formFields.find((field) => field.name === "password");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordResetSuccess, setShowPasswordResetSuccess] =
    useState(false);
  const { currentUser, login, resetPassword, authError } = useAuth() as UseAuth;
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const navigate = useNavigate();

  function getPageTitle() {
    if (showPasswordResetSuccess) {
      return "Success!";
    }
    if (currentUser) {
      return "Already logged in";
    }

    return "Login";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    if (isError) {
      return;
    }

    try {
      await login(emailField.value, passwordField.value);
      navigate(pageRoutes.privateRoutes.dashboard);
    } catch (firebaseError: any) {
      console.error("Login component caught error:", firebaseError);
      setError(authError || "Failed to log in. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleSubmitResetPassword(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    if (isError) {
      return;
    }

    try {
      await resetPassword(emailField.value);
      setShowPasswordResetSuccess(true);
    } catch (firebaseError: any) {
      console.error("Reset password error:", firebaseError);
      setError(
        authError || "Failed to send password reset email. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section title={getPageTitle()}>
      {currentUser ? (
        <div>Logged in with user: {currentUser.email}</div>
      ) : (
        <>
          {showPasswordResetSuccess ? (
            <>
              <div className="login-reset-success-text">
                If there is an account with this email address you should get a
                password reset email shortly.
              </div>
              <Button
                isPrimary
                onClick={() => {
                  setShowPasswordResetSuccess(false);
                  setShowResetPassword(false);
                }}
              >
                Back to Login
              </Button>
            </>
          ) : (
            <>
              <Box
                component="form"
                sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    disabled={isSubmitting}
                    error={Boolean(error) || emailField.error}
                    fullWidth
                    helperText={error || emailField.errorMessage}
                    id={emailField.name}
                    label={emailField.label}
                    name={emailField.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    type={emailField.type}
                    value={emailField.value}
                    variant="outlined"
                  />
                </div>
                {!showResetPassword && (
                  <div>
                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                      required
                    >
                      <InputLabel htmlFor="login-password">Password</InputLabel>
                      <OutlinedInput
                        id="login-password"
                        label={passwordField.label}
                        name={passwordField.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={passwordField.value}
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label={
                                showPassword
                                  ? "hide the password"
                                  : "display the password"
                              }
                              component="button"
                              onClick={() => setShowPassword(!showPassword)}
                              onMouseDown={(e) => e.preventDefault()}
                              onMouseUp={(e) => e.preventDefault()}
                              edge="end"
                              size="small"
                            >
                              {showPassword ? (
                                <FontAwesomeIcon icon={faEyeSlash} />
                              ) : (
                                <FontAwesomeIcon icon={faEye} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                )}
              </Box>
              {!showResetPassword && (
                <>
                  <Button
                    className="login-forgot-password"
                    isTertiary
                    onClick={() => setShowResetPassword(true)}
                  >
                    Forgot password?
                  </Button>
                  <Button
                    type="submit"
                    isPrimary
                    isDisabled={isSubmitting || isError}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button>
                </>
              )}
              {showResetPassword && (
                <>
                  <Button
                    className="login-forgot-password"
                    isTertiary
                    onClick={() => setShowResetPassword(false)}
                  >
                    Back to login
                  </Button>
                  <Button
                    type="submit"
                    isPrimary
                    isDisabled={isSubmitting || isError}
                    onClick={handleSubmitResetPassword}
                  >
                    Send Reset Email
                  </Button>
                </>
              )}
            </>
          )}
        </>
      )}
    </Section>
  );
}

export default Login;
