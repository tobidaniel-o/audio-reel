import React from "react";
import "./section-mini-details.styles.scss";

function SectionMiniDetails() {
  return (
    <ul className="mini-details">
      <li className="mini-details-list">
        <div className="image-items-container">
          <img
            className="image-item"
            src={
              require("../../../assets/shared/desktop/image-headphones.png")
                .default
            }
            alt="image of an headphone"
          />
        </div>
        <div className="item-shop">
          <p>headphones</p>
          <div className="shop">
            <span>shop</span>
            <img
              src={
                require("../../../assets/shared/desktop/icon-arrow-right.svg")
                  .default
              }
              alt="right arrow"
            />
          </div>
        </div>
      </li>

      <li className="mini-details-list">
        <div className="image-items-container">
          <img
            className="image-item"
            src={
              require("../../../assets/shared/desktop/image-speakers.png")
                .default
            }
            alt=""
          />
        </div>
        <div className="item-shop">
          <p>speakers</p>
          <div className="shop">
            <span>shop</span>
            <img
              src={
                require("../../../assets/shared/desktop/icon-arrow-right.svg")
                  .default
              }
              alt="right arrow"
            />
          </div>
        </div>
      </li>

      <li className="mini-details-list">
        <div className="image-items-container">
          <img
            className="image-item"
            src={
              require("../../../assets/shared/desktop/image-earphones.png")
                .default
            }
            alt=""
          />
        </div>
        <div className="item-shop">
          <p>earphones</p>
          <div className="shop">
            <span>shop</span>
            <img
              src={
                require("../../../assets/shared/desktop/icon-arrow-right.svg")
                  .default
              }
              alt="right arrow"
            />
          </div>
        </div>
      </li>
    </ul>
  );
}

export default SectionMiniDetails;
