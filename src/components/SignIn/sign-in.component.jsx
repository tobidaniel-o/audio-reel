import React, { Component } from "react";
import FormInput from "../FormInput/form-input.component";
import Button from "../Button/button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in-container">
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={this.state.email}
              handleChange={this.handleChange}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              value={this.state.password}
              handleChange={this.handleChange}
              label="Password"
              required
            />
            <Button type="Submit" style={{ marginRight: "10px" }}>
              Sign in
            </Button>
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
