import Box from "@mui/material/Box";

import Section from "../../components/section/section";
import FormFieldInput from "../../library/form-field-input/form-field-input";
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
    type: "tel",
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
    name: "Device info",
    placeholder: "Please add device info if known",
    isRequired: false,
    isTextArea: true,
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
    handleKeyDown,
    handleSheetSubmit,
    isError,
    isSubmitting,
    submitStatus,
    submitMessage,
  } = useForm(
    initSupportRequestFields,
    import.meta.env.VITE_GOOGLE_SHEET_SUPPORT_REQUEST_URL,
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
      <div className="support-request-hours">
        <div>Support hours: M-F 6am - 6pm PST</div>
        <div>
          All support requests are responded to in the order they are received.
          Our goal is 1 hour resonse time. We look forward to serving you soon!
        </div>
      </div>
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
                  <FormFieldInput
                    {...field}
                    key={field.name}
                    isSubmitting={isSubmitting}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handleKeyDown={handleKeyDown}
                  />
                );
            })}
          </div>
          <div className="form-group">
            {formFields.map((field, i) => {
              if (i === 2 || i === 3)
                return (
                  <FormFieldInput
                    {...field}
                    key={field.name}
                    isSubmitting={isSubmitting}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handleKeyDown={handleKeyDown}
                  />
                );
            })}
          </div>
          <div className="form-group">
            {formFields.map((field, i) => {
              if (i === 4)
                return (
                  <FormFieldInput
                    {...field}
                    key={field.name}
                    isSubmitting={isSubmitting}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handleKeyDown={handleKeyDown}
                  />
                );
            })}
          </div>
          <div className="form-group">
            {formFields.map((field, i) => {
              if (i === 5)
                return (
                  <FormFieldInput
                    {...field}
                    key={field.name}
                    isSubmitting={isSubmitting}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handleKeyDown={handleKeyDown}
                  />
                );
            })}
          </div>
          <div className="form-group">
            {formFields.map((field, i) => {
              if (i === 6)
                return (
                  <FormFieldInput
                    {...field}
                    key={field.name}
                    isSubmitting={isSubmitting}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handleKeyDown={handleKeyDown}
                  />
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
