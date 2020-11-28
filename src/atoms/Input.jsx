import React from "react";

import Typography from "./Typography";
import { InputField } from "./style";

export default function Input({
  name,
  label,
  type = "text",
  inputState = "unfocused"
}) {
  return (
    <InputField>
      <Typography component="label" variant="label" htmlFor={name}>
        {label}
      </Typography>
      <input
        id={name}
        data-state={inputState}
        placeholder={label}
        type={type}
      />
    </InputField>
  );
}
