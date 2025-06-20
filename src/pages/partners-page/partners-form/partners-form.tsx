import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

import Section from "../../../components/section/section";
import useForm, { FormField } from "../../../shared/hooks/use-form/use-form";
import Button from "../../../library/button/button";
import Message from "../../../components/message/message";

import "./partners-form.scss";

const initPartnersFields: FormField[] = [
  {
    name: "Name",
    placeholder: "Your name",
    isRequired: true,
  },
  {
    name: "Company title",
    placeholder: "Your company title",
    isRequired: true,
  },
  {
    name: "Phone",
    placeholder: "Your phone number",
    isRequired: true,
    type: "tel",
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
    label: "Which type of TMS partnership is more appealing?",
    name: "Partner type",
    isRequired: true,
    selectOptions: ["Referral", "Reseller"],
  },
  {
    label: "Do you have any current opportunities?",
    name: "Opportunities",
    isRequired: true,
    selectOptions: ["Yes", "No"],
  },
  {
    name: "More details",
    placeholder:
      "Please share any additional details about your fleet of mobile devices",
    isRequired: false,
    isTextArea: true,
  },
];

function PartnersForm() {
  const {
    formFields,
    handleBlur,
    handleChange,
    handleKeyDown,
    handleSheetSubmit,
    isError,
    isSubmitting,
    submitStatus,
    submitMessage,
  } = useForm(
    initPartnersFields,
    import.meta.env.VITE_GOOGLE_SHEET_PARTNERS_URL
  );

  return (
    <Section title="Become a Partner">
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
                        onKeyDown={handleKeyDown}
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
                  if (i == 2 || i === 3)
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
                        onKeyDown={handleKeyDown}
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
                        onKeyDown={handleKeyDown}
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
                        onKeyDown={handleKeyDown}
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
                  if (i === 8)
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
                        onKeyDown={handleKeyDown}
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

export default PartnersForm;
