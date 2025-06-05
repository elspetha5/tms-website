import { useMemo, useState } from "react";

import { handleFormatPhoneNumber, handleValidation } from "./validation-util";

function createInitialFormState(fieldsBlueprint) {
  return fieldsBlueprint.map((field) => ({
    ...field,
    value: field.value || "",
    error: false,
    errorMessage: "",
  }));
}

export interface FormField {
  error?: boolean;
  errorMessage?: string;
  isRequired: boolean;
  isTextArea?: boolean;
  label?: string;
  name: string;
  placeholder?: string;
  selectOptions?: string[];
  type?: string;
  value?: string;
}

function useForm(fieldsBlueprint: FormField[], webAppUrl?: string) {
  const memoizedInitialState = useMemo(
    () => createInitialFormState(fieldsBlueprint),
    [fieldsBlueprint]
  );

  const [formFields, setFormFields] = useState(memoizedInitialState);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "success" | "error" | "warning" | null
  >(null);
  const [submitMessage, setSubmitMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormFields((prevFields) =>
      prevFields.map((field) => {
        let telValue;
        if (field.type === "tel") {
          telValue = handleFormatPhoneNumber(value);
        }
        return field.name === name
          ? {
              ...field,
              value: telValue || value,
              error: false,
              errorMessage: "",
            }
          : field;
      })
    );
  }

  function handleKeyDown(e) {
    if (
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "Tab" ||
      e.key.startsWith("Arrow")
    ) {
      return;
    }

    if (
      (e.target.type === "number" || e.target.type === "tel") &&
      /[^0-9]/.test(e.key)
    ) {
      e.preventDefault();
      return;
    }
  }

  function handleBlur(e) {
    const { name } = e.target;

    setFormFields((prevFields) => {
      return prevFields.map((field) => {
        if (field.name === name) {
          return handleValidation(field, setIsError);
        }
        return field;
      });
    });
  }

  async function handleSheetSubmit(e) {
    e.preventDefault();
    setIsError(false);
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    let isFormValid = true;

    await setFormFields((prevFields) => {
      const validatedFields = prevFields.map((field) => {
        const updatedField = handleValidation(field, setIsError);
        if (updatedField.error) {
          isFormValid = false;
        }
        return updatedField;
      });

      return validatedFields;
    });

    if (!isFormValid) {
      setSubmitStatus("error");
      setSubmitMessage("Please correct the highlighted fields and try again");
      setIsSubmitting(false);
      setIsError(true);
      return;
    }

    const recaptchaToken = await new Promise((resolve) => {
      grecaptcha.ready(function () {
        grecaptcha
          .execute(import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY, {
            action: "submit_form",
          })
          .then(function (token) {
            resolve(token);
          });
      });
    });

    const dataToSubmit = new URLSearchParams();
    formFields.forEach((field) => {
      dataToSubmit.append(field.name, field.value);
    });
    dataToSubmit.append("recaptchaToken", recaptchaToken);

    if (webAppUrl) {
      try {
        const response = await fetch(webAppUrl, {
          method: "POST",
          mode: "no-cors",
          cache: "no-cache",
          body: dataToSubmit,
        });

        const responseData = await response.json();
        if (responseData.result === "success") {
          setSubmitStatus("success");
          setSubmitMessage("Your request has been sent successfully!");
          setFormFields(memoizedInitialState);
        } else if (responseData.result === "warning") {
          setSubmitStatus("warning");
          setSubmitMessage(responseData.message);
        } else {
          setIsError(true);
          setSubmitStatus("error");
          setSubmitMessage(responseData.message);
        }
      } catch (error) {
        if (error.toString().includes("SyntaxError")) {
          setSubmitStatus("success");
          setSubmitMessage("Your request has been sent successfully!");
          setFormFields(memoizedInitialState);
        } else {
          console.error("Submission error:", error);
          setIsError(true);
          setSubmitStatus("error");
          setSubmitMessage("Failed to send request. Please try again later.");
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  function resetForm() {
    setFormFields(memoizedInitialState);
    setSubmitStatus(null);
    setSubmitMessage("");
    setIsSubmitting(false);
  }

  return {
    formFields,
    handleBlur,
    handleChange,
    handleKeyDown,
    handleSheetSubmit,
    isError,
    isSubmitting,
    submitStatus,
    submitMessage,
    resetForm,
  };
}

export default useForm;
