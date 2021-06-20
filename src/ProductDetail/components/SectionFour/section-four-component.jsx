import React from "react";
import Button from "../../../components/Button/button.component";
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
}) {
  return (
    <>
      <div className="section-four">
        <h2>you may also like</h2>
        <ul>
          <li>
            <img src={firstImg} alt={altOne} />
            <h3>{itemBrandOne}</h3>
            <Button
              backgroundColor="#d87d4a"
              color="#ffffff"
              buttonType="see product"
            />
          </li>
          <li>
            <img src={secondImg} alt={altTwo} />
            <h3>{itemBrandTwo}</h3>
            <Button
              backgroundColor="#d87d4a"
              color="#ffffff"
              buttonType="see product"
            />
          </li>
          <li>
            <img src={thirdImg} alt={altThree} />
            <h3>{itemBrandThree}</h3>
            <Button
              backgroundColor="#d87d4a"
              color="#ffffff"
              buttonType="see product"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default SectionFour;
