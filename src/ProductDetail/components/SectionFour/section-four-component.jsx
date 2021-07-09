import React from "react";
import Button from "../../../components/Button/button.component";
import { Link } from "react-router-dom";
import "./section-four.styles.scss";

function SectionFour({
  firstImg,
  secondImg,
  thirdImg,
  altOne,
  altTwo,
  altThree,
  itemBrandOne,
  itemBrandTwo,
  itemBrandThree,
  productDetailsOne,
  productDetailsTwo,
  productDetailsThree,
}) {
  return (
    <>
      <div className="section-four">
        <h2>you may also like</h2>
        <ul>
          <li>
            <img src={firstImg} alt={altOne} />
            <h3>{itemBrandOne}</h3>
            <Link to={productDetailsOne}>
              <Button style={{ backgroundColor: "#d87d4a", color: "#ffffff" }}>
                see product
              </Button>
            </Link>
          </li>
          <li>
            <img src={secondImg} alt={altTwo} />
            <h3>{itemBrandTwo}</h3>

            <Link to={productDetailsTwo}>
              <Button style={{ backgroundColor: "#d87d4a", color: "#ffffff" }}>
                see product
              </Button>
            </Link>
          </li>
          <li>
            <img src={thirdImg} alt={altThree} />
            <h3>{itemBrandThree}</h3>

            <Link to={productDetailsThree}>
              <Button style={{ backgroundColor: "#d87d4a", color: "#ffffff" }}>
                see product
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SectionFour;
