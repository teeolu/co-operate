import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AuthenticationPageLayout } from "../../components";
import { Input } from "../../atoms";

const Signin = () => {
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
      title="Welcome back..."
      alternateLink={
        <span>
          <Link to="forgot-password">Forgot password?</Link> let's reset it
        </span>
      }
      bottomText={
        <>
          <p>
            <Link to="signup">Sign up</Link> if you don't have an account
            already
          </p>
          <p>
            We are very ready to have you. We are a community that surports each
            other
          </p>
        </>
      }
      btnText="Sign in"
      onSubmit={handleSubmit}
    >
      <Input
        name="email"
        label="Email address"
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

export default Signin;
