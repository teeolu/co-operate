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

  const bottomText = (
    <p>
      <Link to="signup">Sign up</Link> if you don't have an account already
    </p>
  );

  return (
    <AuthenticationPageLayout
      alternateLink={
        <span>
          <Link to="signin">Sign in</Link> if you have an account already
        </span>
      }
      description="A mail will be sent to the email you provide. Click on the reset link to reset your password"
      bottomText={bottomText}
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
