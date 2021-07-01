import React from "react";
import Navigation from "../Navigation/navigation.component";
import Button from "../Button/button.component";

import "./header.styles.scss";

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <Navigation />
        <div className="new-product">
          <h1>new product</h1>
          <span>xx99 mark ii</span>
          <span>headphones</span>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          {/* <Button
            backgroundColor="#d87d4a"
            color="#ffffff"
            buttonType="see product"
          /> */}
          <Button
            style={{ backgroundColor: "#d87d4a", color: "#ffffff" }}
            type="Submit"
          >
            see product
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
