import React from "react";
import Button from "../../../components/Button/button.component";
import "./section-one.styles.scss";

function SectionOne({
  src,
  heading,
  alt,
  itemBrand,
  typeOfItem,
  aboutProduct,
  price,
  numberOfItem,
}) {
  return (
    <>
      <div className="item-and-article-section">
        <div className="section-positioning">
          <div className="left-side">
            <a href="https://something.ca">Go Back</a>
            <div className="item-image-container">
              <img src={src} alt={alt} />
            </div>
          </div>
          <article className="article-main">
            <h3>{heading}</h3>
            <div className="article-container">
              <p className="article-heading-one">{itemBrand}</p>
              <p className="article-heading-one">{typeOfItem}</p>
            </div>
            <div className="article">{aboutProduct}</div>
            <span className="price">{price}</span>
            <div className="add-to-cart-container">
              <div className="numbers-of-item-picked">
                <span className="decrement">-</span>
                <span>{numberOfItem}</span>
                <span className="increment">+</span>
              </div>

              <Button style={{ backgroundColor: "#d87d4a", color: "#ffffff" }}>
                add to cart
              </Button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
