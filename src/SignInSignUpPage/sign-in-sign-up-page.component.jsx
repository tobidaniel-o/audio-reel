import React from "react";
import CategoryHeader from "../Categories/CategoryHeader/category-header-component";
import SignIn from "../components/SignIn/sign-in.component";
import "./sign-in-sign-up-page.styles.scss";

const SignInSignUpPage = () => {
  return (
    <div>
      <CategoryHeader className="sign-in-sign-up" />
      <div className="wrapper">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInSignUpPage;
