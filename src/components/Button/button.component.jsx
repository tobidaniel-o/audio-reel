import React from "react";
import "./button.styles.scss";

function Button({ children, ...otherProps }) {
  return (
    <button className="btn" {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
