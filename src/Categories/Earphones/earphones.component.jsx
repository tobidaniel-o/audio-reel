import React from "react";
import CategoryHeader from "../CategoryHeader/category-header-component";
import {Link} from 'react-router-dom'
import ItemAndDetails from "../ItemAndDetailsComponent/item-and-details-component";
import SectionShared from "../../components/Sections/Section-Main/Section-Shared/section-shared.component";
import SectionMiniDetails from "../../components/Sections/Section-Mini-Details/section-mini-details.component";
import Footer from "../../components/Footer/footer.component";

function Earphones() {
  return (
    <div className="headphones-category-page">
      <CategoryHeader header="earphones" />
      <ItemAndDetails
        itemAndDetailsPositioning="first-section-positioning"
        src={
          require("../../assets/product-yx1-earphones/desktop/image-product.jpg")
            .default
        }
        alt="xx99 mark ii black headphones"
        heading="new product"
        headPhonesName="yx1 wireless"
        typeOfItem="earphones"
        aboutProduct="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        productLink="/earphones-1"
      />

      <div className="category-shared-section">
        <div className="wrapper">
          <SectionMiniDetails />
          <SectionShared />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Earphones;
