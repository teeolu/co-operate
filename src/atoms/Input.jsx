import React, { useState, useEffect } from "react";

import Typography from "./Typography";
import { InputField } from "./style";

export default function Input({
  name,
  label,
  rules = {},
  type = "text",
  inputState = "unfocused",
  onInputChange
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    onInputChange(name, value);
    // eslint-disable-next-line
  }, [value]);

  return (
    <InputField>
      <Typography component="label" variant="label" htmlFor={name}>
        {label}
      </Typography>
      <input
        id={name}
        value={value}
        onChange={event => setValue(event.target.value)}
        required={rules.required}
        data-state={inputState}
        placeholder={label}
        type={type}
      />
    </InputField>
  );
}
