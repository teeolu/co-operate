import React, { useState, useEffect, useRef } from "react";

import Typography from "./Typography";
import { InputField } from "./style";
import hidePasswordIcon from "../assets/icons/hide-password.svg";
import showPasswordIcon from "../assets/icons/show-password.svg";

export default function Input({
  name,
  label,
  type = "text",
  errorMessage = "Enter a valid input",
  onInputChange,
  ...rest
}) {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(null);
  const [isBlur, setIsBlur] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const inputDocument = inputRef.current;
    inputDocument.addEventListener("input", function(event) {
      if (!inputDocument.checkValidity()) {
        setHasError(true);
        inputDocument.setCustomValidity(errorMessage);
      } else {
        setHasError(false);
        inputDocument.setCustomValidity("");
      }
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    onInputChange(name, value);
    // eslint-disable-next-line
  }, [value]);

  function handleTogglePasswordVisibility() {
    setShowPassword(state => !state);
  }

  return (
    <InputField>
      {!!label && (
        <Typography
          data-required={rest.required}
          component="label"
          variant="label"
          htmlFor={name}
        >
          {label}
        </Typography>
      )}
      <div>
        <input
          id={name}
          ref={inputRef}
          value={value}
          onFocus={() => setIsBlur(false)}
          onBlur={() => setIsBlur(true)}
          onChange={event => setValue(event.target.value)}
          data-has-error={isBlur && hasError}
          placeholder={label}
          type={showPassword ? "text" : type}
          {...rest}
        />
        {type === "password" && (
          <span onClick={handleTogglePasswordVisibility}>
            <img
              src={showPassword ? hidePasswordIcon : showPasswordIcon}
              alt="toggle password visibility"
            />
          </span>
        )}
      </div>
    </InputField>
  );
}
