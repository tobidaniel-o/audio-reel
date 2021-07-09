import React from "react";
import CategoryHeader from "../CategoryHeader/category-header-component";
import {Link} from 'react-router-dom'
import ItemAndDetails from "../ItemAndDetailsComponent/item-and-details-component";
import SectionShared from "../../components/Sections/Section-Main/Section-Shared/section-shared.component";
import SectionMiniDetails from "../../components/Sections/Section-Mini-Details/section-mini-details.component";
import Footer from "../../components/Footer/footer.component";

function Speakers() {
  return (
    <div className="headphones-category-page">
      <CategoryHeader header="speakers" />
      <ItemAndDetails
        itemAndDetailsPositioning="first-section-positioning"
        src={
          require("../../assets/category-speakers/desktop/image-zx9.jpg")
            .default
        }
        alt="zx9 speaker"
        heading="new product"
        headPhonesName="zx9"
        typeOfItem="speaker"
        aboutProduct="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        productLink="/speaker-1"
      />

      <ItemAndDetails
        itemAndDetailsPositioning="second-section-positioning"
        src={
          require("../../assets/category-speakers/desktop/image-zx7.jpg")
            .default
        }
        alt="image-zx7.jpg"
        headPhonesName="zx7"
        typeOfItem="speaker"
        aboutProduct="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        productLink="/speaker-2"
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

export default Speakers;
