import React from "react";
import CategoryHeader from "../CategoryHeader/category-header-component";
import ItemAndDetails from "../ItemAndDetailsComponent/item-and-details-component";
import SectionShared from "../../components/Sections/Section-Main/Section-Shared/section-shared.component";
import SectionMiniDetails from "../../components/Sections/Section-Mini-Details/section-mini-details.component";
import Footer from "../../components/Footer/footer.component";

function HeadPhonesCategory() {
  return (
    <div className="headphones-category-page">
      <CategoryHeader header="headphones" />
      <ItemAndDetails
        itemAndDetailsPositioning="first-section-positioning"
        src={
          require("../../assets/category-headphones/desktop/image-xx99-mark-two.jpg")
            .default
        }
        alt="xx99 mark ii black headphones"
        heading="new product"
        headPhonesName="xx99 mark ii"
        typeOfItem="headphones"
        aboutProduct="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        productLink="/headphones-2"
      />

      <ItemAndDetails
        itemAndDetailsPositioning="second-section-positioning"
        src={
          require("../../assets/category-headphones/desktop/image-xx99-mark-one.jpg")
            .default
        }
        alt="xx99 mark i headphones"
        headPhonesName="xx99 mark i"
        typeOfItem="headphones"
        aboutProduct="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        productLink="/headphones-1"
      />

      <ItemAndDetails
        itemAndDetailsPositioning="first-section-positioning"
        src={
          require("../../assets/category-headphones/desktop/image-xx59.jpg")
            .default
        }
        alt="xx59 headphones"
        headPhonesName="xx59"
        typeOfItem="headphones"
        aboutProduct="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        productLink="/headphones-3"
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

export default HeadPhonesCategory;
