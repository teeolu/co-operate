import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AuthenticationPageLayout } from "../../components";
import { Input } from "../../atoms";

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
          <Link to="signin">Login</Link> if you have an account already
        </span>
      }
      bottomText="We are very ready to have you. We are a community that surports each other"
      onSubmit={handleSubmit}
    >
      <Input
        name="fullName"
        label="Full name"
        onInputChange={handleInputChange}
        rules={{
          required: true
        }}
      />
      <Input
        name="email"
        label="Email address"
        onInputChange={handleInputChange}
        rules={{
          required: true
        }}
      />
      <Input
        name="phoneNumber"
        label="Phone number"
        onInputChange={handleInputChange}
        rules={{
          required: true
        }}
      />
      <Input
        name="password"
        label="Password"
        onInputChange={handleInputChange}
        rules={{
          required: true
        }}
      />
    </AuthenticationPageLayout>
  );
};

export default Signup;