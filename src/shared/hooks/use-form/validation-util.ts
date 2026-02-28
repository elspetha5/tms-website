export function handleFormatPhoneNumber(value) {
  let newValue = value;
  newValue = newValue.replace(/^1+/, "").replace(/\D/g, "");
  const areaCode = newValue.substring(0, 3);
  const secondThree = newValue.substring(3, 6);
  const lastFour = newValue.substring(6, 10);

  let formattedValue = "";
  if (areaCode) formattedValue += `(${areaCode}`;
  if (secondThree) formattedValue += `) ${secondThree}`;
  if (lastFour) formattedValue += `-${lastFour}`;

  // IF not 10 digits, error

  return formattedValue;
}

export function handleValidation(field, setIsError) {
  let updatedField = { ...field, error: false, errorMessage: "" };
  let isError = false;

  if (
    (updatedField.name.toLowerCase().includes("zip") ||
      updatedField.name.toLowerCase().includes("postal")) &&
    !/^\d{5}(?:[-\s]\d{4})?$/.test(updatedField.value)
  ) {
    updatedField = {
      ...updatedField,
      error: true,
      errorMessage: "Invalid zip code format (e.g, 12345 or 12345-6789)",
    };
  }

  if (updatedField.type === "tel") {
    let newValue = field.value;
    newValue = newValue.replace(/^1+/, "").replace(/\D/g, "");
    if (newValue.length < 10) {
      updatedField = {
        ...updatedField,
        error: true,
        errorMessage: "Invalid phone number",
      };
      isError = true;
    }
  }

  if (
    updatedField.type === "email" &&
    !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(
      updatedField.value
    )
  ) {
    updatedField = {
      ...updatedField,
      error: true,
      errorMessage: "Invalid email address",
    };
    isError = true;
  }

  if (
    updatedField.isRequired &&
    (typeof updatedField.value === "string"
      ? !updatedField.value.trim()
      : !updatedField.value)
  ) {
    updatedField = {
      ...updatedField,
      error: true,
      errorMessage: "This field is required.",
    };
    isError = true;
  }

  setIsError(isError);
  return updatedField;
}
