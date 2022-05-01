import React from "react";
import Navigation from "../Navigation/navigation.component";
import Button from "../Button/button.component";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import "../Button/button.styles.scss";

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <Navigation />
        <div className="new-product">
          <h1>new produ</h1>
          <span>xx99 mark ii</span>
          <span>headphones</span>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/headphones-2">
            <Button
              style={{
                backgroundColor: "#d87d4a",
                color: "#ffffff",
              }}
            >
              see product
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
