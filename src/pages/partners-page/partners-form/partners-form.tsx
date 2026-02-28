import Box from "@mui/material/Box";

import Section from "../../../components/section/section";
import FormFieldInput from "../../../library/form-field-input/form-field-input";
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
                  if (i == 2 || i === 3)
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
                  if (i === 4 || i === 5)
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
                  if (i === 6 || i === 7)
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
                  if (i === 8)
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
        </>
      )}
    </Section>
  );
}

export default PartnersForm;
