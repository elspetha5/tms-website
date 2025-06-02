import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

import Section from "../../components/section/section";
import useForm, { FormField } from "../../shared/hooks/use-form/use-form";
import Button from "../../library/button/button";
import Message from "../../components/message/message";

import "./support-request-page.scss";

const initSupportRequestFields: FormField[] = [
  {
    name: "Name",
    placeholder: "Your name",
    isRequired: true,
  },
  {
    name: "Phone",
    placeholder: "Your phone",
    isRequired: true,
  },
  {
    name: "Company name",
    placeholder: "Your company name",
    isRequired: true,
  },
  {
    name: "Company email",
    placeholder: "Your company email",
    isRequired: true,
    type: "email",
  },
  {
    name: "Support type",
    placeholder: "Support needed",
    isRequired: true,
    selectOptions: [
      "Technical support",
      "Device request",
      "Lost device",
      "Other",
    ],
  },
  {
    name: "More details",
    placeholder: "Please share any additional details",
    isRequired: false,
    isTextArea: true,
  },
];

function SupportRequestPage() {
  const {
    formFields,
    handleBlur,
    handleChange,
    handleSheetSubmit,
    isError,
    isSubmitting,
    submitStatus,
    submitMessage,
  } = useForm(
    initSupportRequestFields,
    import.meta.env.VITE_NEW_GOOGLE_SHEET_SUPPORT_REQUEST_URL
  );
  const successMsg =
    "Thank you for your Support Request! TMS tech support will contact you very soon.";

  return (
    <Section title="Support Request">
      {submitStatus && submitMessage && (
        <Message
          className="support-req-msg"
          type={submitStatus}
          message={submitStatus === "success" ? successMsg : submitMessage}
        />
      )}
      <div className="spacer-div" />
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div className="form-group-container">
          <div className="form-group">
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
              if (i === 4)
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
              if (i === 5)
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
    </Section>
  );
}

export default SupportRequestPage;
