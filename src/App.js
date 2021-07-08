import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./HomePage/homepage.component";
import HeadPhonesCategory from "./Categories/Headphones/headphones.component";
import Speakers from "./Categories/Speakers/speakers.component";
import Earphones from "./Categories/Earphones/earphones.component";
import HeadPhones1 from "./ProductDetail/Headphones-1/headphones-1.component";
import HeadPhones3 from "./ProductDetail/Headphones-3/headphones-3.component";
import HeadPhones2 from "./ProductDetail/Headphones-2/headphones-2.component";
import Speaker1 from "./ProductDetail/Speakers-1/speakers-1.component";
import Speaker2 from "./ProductDetail/Speakers-2/speaker-2.component";
import EarPhones1 from "./ProductDetail/Earphones-1/earphones-1.component";
import SignInSignUpPage from "./SignInSignUpPage/sign-in-sign-up-page.component";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import "./setup.css";
import "./App.scss";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/headphones-category" component={HeadPhonesCategory} />
          <Route path="/speakers" component={Speakers} />
          <Route path="/earphones" component={Earphones} />
          <Route path="/headphones-1" component={HeadPhones1} />
          <Route path="/headphones-2" component={HeadPhones2} />
          <Route path="/headphones-3" component={HeadPhones3} />
          <Route path="/speaker-1" component={Speaker1} />
          <Route path="/speaker-2" component={Speaker2} />
          <Route path="/earphones-1" component={EarPhones1} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
