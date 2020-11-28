import React from "react";
import { Link } from "react-router-dom";

import { AuthenticationPageLayout } from "../../components";
import { Input } from "../../atoms";

const Signup = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Okay, we are done ", event);
  }

  return (
    <AuthenticationPageLayout
      alternateLink={
        <span>
          <Link to="login">Login</Link> if you have an account already
        </span>
      }
      bottomText="We are very ready to have you. We are a community that surports each other"
      onSubmit={handleSubmit}
    >
      <Input name="fullName" label="Full name" />
      <Input name="email" label="Email address" />
      <Input name="phoneNumber" label="Phone number" />
      <Input name="password" label="Password" />
    </AuthenticationPageLayout>
  );
};

export default Signup;
