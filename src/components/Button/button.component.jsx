import React from "react";
import "./button.styles.scss";

function Button({ backgroundColor, color, border }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: backgroundColor, color: color, border: border }}
    >
      see product
    </button>
  );
}

export default Button;
