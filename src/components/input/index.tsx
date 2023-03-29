import { ChangeEvent, ForwardedRef, forwardRef } from "react";
import { Container } from "./styles";

interface InputProps {
  label?: string;
  error?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
}

const Input = forwardRef(
  (
    {
      label,
      error,
      onChange,
      value,
      type = "text",
      placeholder,
      errorMessage,
      disabled = false,
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Container error={error}>
        {label && <label htmlFor={label}>{label}</label>}
        <input
          placeholder={placeholder || errorMessage}
          ref={ref}
          type={type}
          onChange={onChange}
          value={value}
          id={label}
          disabled={disabled}
        />
      </Container>
    );
  }
);

Input.displayName = "Input";

export { Input };
