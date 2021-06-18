import React from "react";
import Button from "../../components/Button/button.component";
import "./item-and-details.styles.scss";

function ItemAndDetails({
  src,
  heading,
  alt,
  headPhonesName,
  typeOfItem,
  aboutProduct,
  itemAndDetailsPositioning,
}) {
  return (
    <section className="item-and-details-section">
      <div className="wrapper">
        <div className={itemAndDetailsPositioning}>
          <div className="item-image-container">
            <img src={src} alt={alt} />
          </div>
          <article className="article-main">
            <h3>{heading}</h3>
            <div className="article-container">
              <p className="article-heading-one">{headPhonesName}</p>
              <p className="article-heading-one">{typeOfItem}</p>
            </div>

            <p className="article">{aboutProduct}</p>
            <Button backgroundColor="#d87d4a" color="#ffffff" />
          </article>
        </div>
      </div>
    </section>
  );
}

export default ItemAndDetails;
