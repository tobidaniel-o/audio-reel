import React from "react";
import "./button.styles.scss";

function Button({ backgroundColor, color, border, buttonType }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: backgroundColor, color: color, border: border }}
    >
      {buttonType}
    </button>
  );
}

export default Button;
