import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import "./navigation.styles.scss";

function Navigation({ currentUser }) {
  return (
    <nav className="navigation">
      <span className="logo">
        <Link to="/" className="link">
          audioreel
        </Link>
      </span>
      <ul>
        <li>
          <Link to="/" className="link">
            home
          </Link>
        </li>
        <li>
          <Link to="/headphones-category" className="link">
            headphones
          </Link>
        </li>
        <li>
          <Link to="/speakers" className="link">
            speakers
          </Link>
        </li>
        <li>
          <Link to="/earphones" className="link">
            earphones
          </Link>
        </li>
        <li>
          {currentUser ? (
            <Link to="/signin" className="link" onClick={() => auth.signOut()}>
              sign out
            </Link>
          ) : (
            <Link className="link" to="/signin">
              sign in
            </Link>
          )}
        </li>
      </ul>
      <img
        className="cart"
        src={require("../../assets/shared/desktop/icon-cart.svg").default}
        alt="shopping cart"
      />
    </nav>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navigation);
