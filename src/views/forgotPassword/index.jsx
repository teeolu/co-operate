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
          <Link to="signin">Sign in</Link> if you have an account already
        </span>
      }
      description="A mail will be sent to the email you provide. Click on the reset link to reset your password"
      bottomText="We are very ready to have you. We are a community that surports each other"
      onSubmit={handleSubmit}
      title="Forgot password..."
      btnText="Send link"
    >
      <Input
        name="email"
        label="Email address"
        onInputChange={handleInputChange}
        rules={{
          required: true
        }}
      />
    </AuthenticationPageLayout>
  );
};

export default Signup;
