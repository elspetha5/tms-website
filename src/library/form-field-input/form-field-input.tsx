import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { FormField } from "../../shared/hooks/use-form/use-form";

interface FormFieldInputInterface extends FormField {
  isSubmitting: boolean;
  handleChange: (e, name?) => void;
  handleBlur: () => void;
  handleKeyDown: () => void;
}

function FormFieldInput(props: FormFieldInputInterface) {
  const {
    type,
    isSubmitting,
    error,
    errorMessage,
    label,
    name,
    isTextArea,
    handleChange,
    handleBlur,
    handleKeyDown,
    placeholder,
    isRequired,
    selectOptions,
    value,
  } = props;

  return (
    <>
      {type === "date" ? (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={name}
            value={value || null}
            onError={(error) => console.log(error)}
            onChange={(newValue) => handleChange(newValue, name)}
            disablePast
            sx={{ margin: "8px 12px 0 10px" }}
            slotProps={{
              textField: {
                helperText: errorMessage || label,
              },
            }}
          />
        </LocalizationProvider>
      ) : (
        <TextField
          disabled={isSubmitting}
          error={error}
          fullWidth
          helperText={errorMessage || label}
          id={name}
          key={name}
          label={name}
          multiline={isTextArea}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          required={isRequired}
          rows={5}
          select={Boolean(selectOptions)}
          type={type || "text"}
          value={value}
          variant="outlined"
        >
          {Boolean(selectOptions) &&
            selectOptions?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
        </TextField>
      )}
    </>
  );
}

export default FormFieldInput;
