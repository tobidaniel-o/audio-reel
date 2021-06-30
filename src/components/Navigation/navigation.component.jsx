import React from "react";
import { Link } from "react-router-dom";
import "./navigation.styles.scss";

function Navigation() {
  return (
    <nav className="navigation">
      <span className="logo">audioreel</span>
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
          <Link to="signin" className="link">
            sign in
          </Link>
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

export default Navigation;
