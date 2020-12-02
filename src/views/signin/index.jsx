import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";

import { AuthenticationPageLayout } from "../../components";
import { Input } from "../../atoms";
import { Api } from "../../repository/Api";

const Signin = () => {
  const [form, setForm] = useState({});
  const [signinMutation, signinFeedback] = useMutation(Api.auth.signin);

  function handleSubmit(event) {
    event.preventDefault();
    signinMutation(form);
    console.log("Okay, we are done ", form);
  }

  function handleInputChange(name, value) {
    setForm(state => ({ ...state, [name]: value }));
  }

  const alternateLink = (
    <span>
      <Link to="forgot-password">Forgot password?</Link> let's reset it
    </span>
  );

  const bottomText = (
    <>
      <p>
        <Link to="signup">Sign up</Link> if you don't have an account already
      </p>
      <p>
        We are very ready to have you. We are a community that surports each
        other
      </p>
    </>
  );

  return (
    <AuthenticationPageLayout
      title="Welcome back..."
      alternateLink={alternateLink}
      bottomText={bottomText}
      btnText="Sign in"
      onSubmit={handleSubmit}
      isLoading={signinFeedback.isLoading}
    >
      <Input
        name="email"
        label="Email address"
        onInputChange={handleInputChange}
        required
      />
      <Input
        name="password"
        label="Password"
        onInputChange={handleInputChange}
        type="password"
        required
      />
    </AuthenticationPageLayout>
  );
};

export default Signin;
