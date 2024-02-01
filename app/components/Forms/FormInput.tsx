"use client";
import { Input } from "@material-tailwind/react";
import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
  name: string;
  variant?: "standard" | "outlined" | "static";
  color?:string;
  error?:boolean;
  type?:string;
  success?:boolean;
  icon?:React.ReactNode;
  className?:string;
  size?:  "md" | "lg";
  value?: string | number | string[] | undefined;
  placeholder?: string;
  validation?: object;
  label?: string;
  disabled?: boolean;
  required?: boolean;
}

const FormInput = ({
  name,
  variant,
  type,
  color,
  success,
  icon,
  size = "lg",
  value,
  placeholder,
  validation,
  disabled,
  label,
  required,
  className,
  error
  
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
          //@ts-ignore
            <Input
            {...field}
            variant ={variant}
            type={type}
            size={size} 
            icon={icon} 
            placeholder={placeholder}
            disabled={disabled}
            className={className}
            error={Boolean(errorMessage)}
            
            required={required}
            label={label}
          />
        )}
      />
    </div>
  );
};

export default FormInput;
