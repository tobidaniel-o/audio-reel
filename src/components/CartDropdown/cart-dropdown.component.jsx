import React from "react";
import Button from "../Button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Button
        style={{
          backgroundColor: "#d87d4a",
          color: "#ffffff",
        }}
      >
        checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
