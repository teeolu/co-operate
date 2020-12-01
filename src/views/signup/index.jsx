import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AuthenticationPageLayout } from "../../components";
import { Input } from "../../atoms";
import { regexPatterns, errorMessages } from "../../utils/formUtils";

const Signup = () => {
  const [form, setForm] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Okay, we are done ", form);
  }

  function handleInputChange(name, value) {
    setForm(state => ({ ...state, [name]: value }));
  }

  return (
    <AuthenticationPageLayout
      alternateLink={
        <span>
          <Link to="signin">Sign in</Link> if you have an account already
        </span>
      }
      bottomText="We are very ready to have you. We are a community that surports each other"
      onSubmit={handleSubmit}
    >
      <Input
        name="fullName"
        label="Full name"
        onInputChange={handleInputChange}
        required
      />
      <Input
        name="email"
        label="Email address"
        errorMessage={errorMessages.email}
        onInputChange={handleInputChange}
        required
        pattern={regexPatterns.email}
      />
      <Input
        name="phoneNumber"
        label="Phone number"
        onInputChange={handleInputChange}
        required
        minLength={11}
      />
      <Input
        name="password"
        label="Password"
        type="password"
        onInputChange={handleInputChange}
        minLength={8}
        required
      />
    </AuthenticationPageLayout>
  );
};

export default Signup;
