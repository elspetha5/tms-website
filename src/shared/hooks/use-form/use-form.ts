import { useMemo, useState } from "react";

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

function useForm(fieldsBlueprint: FormField[], webAppUrl: string) {
  const memoizedInitialState = useMemo(
    () => createInitialFormState(fieldsBlueprint),
    [fieldsBlueprint]
  );

  const [formFields, setFormFields] = useState(memoizedInitialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [submitMessage, setSubmitMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormFields((prevFields) =>
      prevFields.map((field) =>
        field.name === name
          ? { ...field, value: value, error: false, errorMessage: "" }
          : field
      )
    );
  }

  function handleNumberKeyDown(e) {
    if (
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "Tab" ||
      e.key.startsWith("Arrow")
    ) {
      return;
    }

    if (/[^0-9]/.test(e.key)) {
      e.preventDefault();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    let hasOverallValidationError = false;
    const validatedFields = formFields.map((field) => {
      if (field.isRequired && !field.value.trim()) {
        hasOverallValidationError = true;
        return {
          ...field,
          error: true,
          errorMessage: "This field is required.",
        };
      }
      if (
        field.type === "email" &&
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(field.value)
      ) {
        hasOverallValidationError = true;
        return {
          ...field,
          error: true,
          errorMessage: "Not a valid email address",
        };
      }
      return { ...field, error: false, errorMessage: "" };
    });

    setFormFields(validatedFields);

    if (hasOverallValidationError) {
      setSubmitStatus("error");
      setSubmitMessage("Please correct the highlighted fields and try again");
      setIsSubmitting(false);
      return;
    }

    const dataToSubmit = new URLSearchParams();
    formFields.forEach((field) => {
      dataToSubmit.append(field.name, field.value);
    });

    try {
      await fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        body: dataToSubmit,
      });

      setSubmitStatus("success");
      setSubmitMessage("Your request has been sent successfully!");
      setFormFields(memoizedInitialState);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage("Failed to send request. Please try again later.");
    } finally {
      setIsSubmitting(false);
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
    handleChange,
    handleNumberKeyDown,
    handleSubmit,
    isSubmitting,
    submitStatus,
    submitMessage,
    resetForm,
  };
}

export default useForm;
