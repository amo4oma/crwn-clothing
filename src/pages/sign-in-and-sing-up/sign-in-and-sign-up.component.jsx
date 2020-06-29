import React from "react";
import "./sign-in-and-sign-up.component.scss";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../pages/Sign-in/Sign-in.component";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
