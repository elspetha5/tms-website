import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";

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

  const maxDate = dayjs().add(90, "day");
  function isWeekend(date: Dayjs) {
    const day = date.day();
    return day === 0 || day === 6;
  }

  if (type === "date") {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={name}
          value={value || null}
          onChange={(newValue) => handleChange(newValue, name)}
          disablePast
          maxDate={maxDate}
          shouldDisableDate={isWeekend}
          sx={{ margin: "8px 12px 0 10px" }}
          slotProps={{
            textField: {
              onBlur: handleBlur,
              required: isRequired,
              error: error,
              helperText: errorMessage || label,
            },
          }}
        />
      </LocalizationProvider>
    );
  }

  return (
    <TextField
      disabled={isSubmitting}
      error={error}
      fullWidth
      helperText={errorMessage || label}
      id={name}
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
      sx={{ textAlign: "left" }}
      type={type || "text"}
      value={value}
      variant="outlined"
    >
      {Boolean(selectOptions) &&
        selectOptions?.map((option) => (
          <MenuItem key={option.value || option} value={option.value || option}>
            {option.label || option}
          </MenuItem>
        ))}
    </TextField>
  );
}

export default FormFieldInput;
