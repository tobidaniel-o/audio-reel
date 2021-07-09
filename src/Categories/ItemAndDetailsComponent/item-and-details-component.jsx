import React from "react";
import Button from "../../components/Button/button.component";
import {Link} from 'react-router-dom'
import "./item-and-details.styles.scss";

function ItemAndDetails({
  src,
  heading,
  alt,
  headPhonesName,
  typeOfItem,
  aboutProduct,
  itemAndDetailsPositioning,
  productLink
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
            <Link to={productLink}>
              <Button style={{ backgroundColor: "#d87d4a", color: "#ffffff" }}>
                see product
              </Button>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ItemAndDetails;
