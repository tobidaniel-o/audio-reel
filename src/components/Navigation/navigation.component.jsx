import React from "react";
import "./navigation.styles.scss";

function Navigation() {
  return (
    <nav className="navigation">
      <span className="logo">audioreel</span>
      <ul>
        <li>home</li>
        <li>headphones</li>
        <li>speakers</li>
        <li>earphones</li>
        <li>sign in</li>
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
