import { useRef, useState } from "react";
import { useAuth } from "../../shared/contexts/auth-context";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import useForm from "../../shared/hooks/use-form/use-form";
import Button from "../../library/button/button";
import Section from "../../components/section/section";
import { pageRoutes } from "../../shared/constants";

import "./login.scss";

const loginFields = [
  {
    label: "Email",
    name: "email",
    isRequired: true,
  },
  {
    label: "Password",
    name: "password",
    isRequired: true,
  },
];

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, authError } = useAuth() as {
    login: (email: string, password: string) => {};
    authError: any;
  };
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both email and password");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
      navigate(pageRoutes.invoiceForm);
    } catch (firebaseError: any) {
      console.error("Login component caught error:", firebaseError);
      setError(authError || "Failed to log in. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Section title="Login">
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            disabled={isLoading}
            error={Boolean(error)}
            fullWidth
            helperText={error}
            id="email"
            label="Email"
            name="email"
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            required
            type="email"
            value={email}
            variant="outlined"
          />
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined" required>
            <InputLabel htmlFor="login-password">Password</InputLabel>
            <OutlinedInput
              id="login-password"
              label="Password"
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
              value={password}
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
      </Box>
      <Button
        type="submit"
        isPrimary
        isDisabled={isLoading}
        onClick={handleSubmit}
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </Section>
  );
}

export default Login;
