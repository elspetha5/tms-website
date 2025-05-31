import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

import Section from "../../components/section/section";
import useForm, { FormField } from "../../shared/hooks/use-form/use-form";
import Button from "../../library/button/button";
import Message from "../../components/message/message";

import "./get-started-page.scss";

const initGetStartedFields: FormField[] = [
  {
    name: "Name",
    placeholder: "Your name",
    isRequired: true,
  },
  {
    name: "Company title",
    placeholder: "Your company title",
    isRequired: false,
  },
  {
    name: "Phone",
    placeholder: "Your phone number",
    isRequired: false,
  },
  {
    name: "Email",
    placeholder: "Your company email",
    isRequired: true,
    type: "email",
  },
  {
    name: "Company name",
    placeholder: "Your company name",
    isRequired: true,
  },
  {
    name: "Website",
    placeholder: "Your company website",
    isRequired: true,
  },
  {
    label: "# of company-owned devices",
    name: "Corporate-owned",
    isRequired: true,
    type: "number",
  },
  {
    label: "# of employee-owned devices",
    name: "BYOD",
    isRequired: false,
    type: "number",
  },
  {
    label: "What is your preferred mobile platform?",
    name: "Mobile platform",
    isRequired: true,
    selectOptions: ["iOS", "Android"],
  },
  {
    label: "Are you concerned about on-device security?",
    name: "Security",
    isRequired: true,
    selectOptions: ["Yes very!", "Not really", "Tell me more"],
  },
  {
    label:
      "Do you have an on-device real-time backup and recovery solution in place?",
    name: "Backup and recovery",
    isRequired: true,
    selectOptions: [
      "I use M365 or Google Workspace",
      "I don't know",
      "Tell me more",
    ],
  },
  {
    label: "When would you like to get started?",
    name: "Get started",
    isRequired: true,
    selectOptions: ["I'm ready now", "Within 30 days", "Exploring my options"],
  },
  {
    name: "More details",
    placeholder:
      "Please share any additional details about your fleet of mobile devices",
    isRequired: false,
    isTextArea: true,
  },
];

function GetStartedPage() {
  const {
    formFields,
    handleBlur,
    handleChange,
    handleNumberKeyDown,
    handleSheetSubmit,
    isError,
    isSubmitting,
    submitStatus,
    submitMessage,
  } = useForm(
    initGetStartedFields,
    import.meta.env.VITE_GOOGLE_SHEET_GET_STARTED_URL
  );

  return (
    <Section title="Get Started with TMS">
      {submitStatus && submitMessage && (
        <Message type={submitStatus} message={submitMessage} />
      )}
      {submitStatus !== "success" && (
        <>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <div className="form-group-container">
              <div className="form-group">
                <div className="get-started-major-label get-started-first-major-label">
                  Info:
                </div>
                {formFields.map((field, i) => {
                  if (i < 2)
                    return (
                      <TextField
                        disabled={isSubmitting}
                        error={field.error}
                        fullWidth
                        helperText={field.errorMessage || field.label}
                        id={field.name}
                        key={field.name}
                        label={field.name}
                        multiline={field.isTextArea}
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={
                          field.type === "number"
                            ? handleNumberKeyDown
                            : () => {
                                return;
                              }
                        }
                        placeholder={field.placeholder}
                        required={field.isRequired}
                        rows={5}
                        select={Boolean(field.selectOptions)}
                        type={field.type || "text"}
                        value={field.value}
                        variant="outlined"
                      >
                        {Boolean(field.selectOptions) &&
                          field.selectOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                      </TextField>
                    );
                })}
              </div>
              <div className="form-group">
                {formFields.map((field, i) => {
                  if (i === 2 || i === 3)
                    return (
                      <TextField
                        disabled={isSubmitting}
                        error={field.error || field.label}
                        fullWidth
                        helperText={field.errorMessage}
                        id={field.name}
                        key={field.name}
                        label={field.name}
                        multiline={field.isTextArea}
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={
                          field.type === "number"
                            ? handleNumberKeyDown
                            : () => {
                                return;
                              }
                        }
                        placeholder={field.placeholder}
                        required={field.isRequired}
                        rows={5}
                        select={Boolean(field.selectOptions)}
                        type={field.type || "text"}
                        value={field.value}
                        variant="outlined"
                      >
                        {Boolean(field.selectOptions) &&
                          field.selectOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                      </TextField>
                    );
                })}
              </div>
              <div className="form-group">
                {formFields.map((field, i) => {
                  if (i === 4 || i === 5)
                    return (
                      <TextField
                        disabled={isSubmitting}
                        error={field.error || field.label}
                        fullWidth
                        helperText={field.errorMessage}
                        id={field.name}
                        key={field.name}
                        label={field.name}
                        multiline={field.isTextArea}
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={
                          field.type === "number"
                            ? handleNumberKeyDown
                            : () => {
                                return;
                              }
                        }
                        placeholder={field.placeholder}
                        required={field.isRequired}
                        rows={5}
                        select={Boolean(field.selectOptions)}
                        type={field.type || "text"}
                        value={field.value}
                        variant="outlined"
                      >
                        {Boolean(field.selectOptions) &&
                          field.selectOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                      </TextField>
                    );
                })}
              </div>
              <div className="form-group">
                <div className="get-started-major-label">
                  Number of devices:
                </div>
                {formFields.map((field, i) => {
                  if (i === 6 || i === 7)
                    return (
                      <TextField
                        disabled={isSubmitting}
                        error={field.error}
                        fullWidth
                        helperText={field.errorMessage || field.label}
                        id={field.name}
                        key={field.name}
                        label={field.name}
                        multiline={field.isTextArea}
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={
                          field.type === "number"
                            ? handleNumberKeyDown
                            : () => {
                                return;
                              }
                        }
                        placeholder={field.placeholder}
                        required={field.isRequired}
                        rows={5}
                        select={Boolean(field.selectOptions)}
                        type={field.type || "text"}
                        value={field.value}
                        variant="outlined"
                      >
                        {Boolean(field.selectOptions) &&
                          field.selectOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                      </TextField>
                    );
                })}
              </div>
              <div className="form-group">
                <div className="get-started-major-label">Preferences:</div>
                {formFields.map((field, i) => {
                  if (i === 8 || i === 9)
                    return (
                      <TextField
                        disabled={isSubmitting}
                        error={field.error}
                        fullWidth
                        helperText={field.errorMessage || field.label}
                        id={field.name}
                        key={field.name}
                        label={field.name}
                        multiline={field.isTextArea}
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={
                          field.type === "number"
                            ? handleNumberKeyDown
                            : () => {
                                return;
                              }
                        }
                        placeholder={field.placeholder}
                        required={field.isRequired}
                        rows={5}
                        select={Boolean(field.selectOptions)}
                        type={field.type || "text"}
                        value={field.value}
                        variant="outlined"
                      >
                        {Boolean(field.selectOptions) &&
                          field.selectOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                      </TextField>
                    );
                })}
              </div>
              <div className="form-group">
                {formFields.map((field, i) => {
                  if (i === 10 || i === 11)
                    return (
                      <TextField
                        disabled={isSubmitting}
                        error={field.error}
                        fullWidth
                        helperText={field.errorMessage || field.label}
                        id={field.name}
                        key={field.name}
                        label={field.name}
                        multiline={field.isTextArea}
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={
                          field.type === "number"
                            ? handleNumberKeyDown
                            : () => {
                                return;
                              }
                        }
                        placeholder={field.placeholder}
                        required={field.isRequired}
                        rows={5}
                        select={Boolean(field.selectOptions)}
                        type={field.type || "text"}
                        value={field.value}
                        variant="outlined"
                      >
                        {Boolean(field.selectOptions) &&
                          field.selectOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                      </TextField>
                    );
                })}
              </div>
              <div className="form-group">
                {formFields.map((field, i) => {
                  if (i === 12)
                    return (
                      <TextField
                        disabled={isSubmitting}
                        error={field.error}
                        fullWidth
                        helperText={field.errorMessage || field.label}
                        id={field.name}
                        key={field.name}
                        label={field.name}
                        multiline={field.isTextArea}
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={
                          field.type === "number"
                            ? handleNumberKeyDown
                            : () => {
                                return;
                              }
                        }
                        placeholder={field.placeholder}
                        required={field.isRequired}
                        rows={5}
                        select={Boolean(field.selectOptions)}
                        type={field.type || "text"}
                        value={field.value}
                        variant="outlined"
                      >
                        {Boolean(field.selectOptions) &&
                          field.selectOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                      </TextField>
                    );
                })}
              </div>
            </div>
          </Box>
          <Button
            type="submit"
            className="form-btn"
            isPrimary
            isDisabled={isSubmitting || isError}
            onClick={handleSheetSubmit}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </>
      )}
    </Section>
  );
}

export default GetStartedPage;
