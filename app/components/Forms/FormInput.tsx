"use client";
import { Input } from "@material-tailwind/react";
import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | number | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  disabled?: boolean;
  required?: boolean;
}

const FormInput = ({
  name,
  type,
  size = "large",
  value,
  id,
  placeholder,
  validation,
  disabled,
  label,
  required,
  
}: IInput) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message || "";

  // If external value prop changes, update the form value
  useEffect(() => {
    if (value !== undefined) {
      setValue(name, value);
    }
  }, [value, setValue, name]);

  return (
    <div className="mb-4">
      {required && <span style={{ color: "red" }}>*</span>}
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        defaultValue={value}
        rules={validation}
        render={({ field }) => (
            <Input
            {...field}
            variant="outlined"
            margin="dense"
            fullWidth
            id={id}
            type={type}
            //@ts-ignore
            size={size}  
            placeholder={placeholder}
            disabled={disabled}
            error={Boolean(errorMessage)}
            helperText={errorMessage}
            required={required}
          />
        )}
      />
    </div>
  );
};

export default FormInput;
