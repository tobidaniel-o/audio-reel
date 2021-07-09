import React from "react";
import Footer from "../../components/Footer/footer.component";
import Navigation from "../../components/Navigation/navigation.component";
import SectionShared from "../../components/Sections/Section-Main/Section-Shared/section-shared.component";
import SectionMiniDetails from "../../components/Sections/Section-Mini-Details/section-mini-details.component";
import SectionFour from "../components/SectionFour/section-four-component";
import SectionOne from "../components/SectionOne/section-one-component";
import SectionThree from "../components/SectionThree/section-three-component";
import SectionTwo from "../components/SectionTwo/section-two-component";

import "../components/components-header.styles.scss";

function HeadPhones3() {
  return (
    <>
      <div className="components-header">
        <div className="wrapper">
          <Navigation />
        </div>
      </div>
      <div className="wrapper">
        <SectionOne
          src={
            require("../../assets/product-xx59-headphones/desktop/image-product.jpg")
              .default
          }
          alt="A XX59 headphones"
          itemBrand="xx59"
          typeOfItem="headphones"
          aboutProduct="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          price="$899"
          numberOfItem="1"
          productsLink="/headphones-category"
        />
        <SectionTwo
          firstFeature="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
          secondFeature="More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
          firstNumberOfUnits="1x"
          firstUnitType="Headphone Unit"
          secondNumberOfUnits="2x"
          secondUnitType="Replacement Earcups"
          thirdNumberOfUnits="1x"
          thirdUnitType="User Manual"
          fourthNumberOfUnits="1x"
          fourthUnitType="3.5mm 5m Audio Cable"
        />
        <SectionThree
          imageSrcOne={
            require("../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg")
              .default
          }
          altOne="A guy holding a pair of headphones on his head."
          imageSrcTwo={
            require("../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg")
              .default
          }
          altTwo="A black headphones and a phone on a table."
          imageSrcThree={
            require("../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg")
              .default
          }
          altThree="A black headphone."
        />
        <SectionFour
          firstImg={
            require("../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg")
              .default
          }
          secondImg={
            require("../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg")
              .default
          }
          thirdImg={
            require("../../assets/product-zx9-speaker/desktop/image-product.jpg")
              .default
          }
          altOne="A XX99 Mark II headphone"
          altTwo="A XX99 Mark I headphone"
          altThree="A ZX9 Speaker "
          itemBrandOne="xx99 mark ii"
          itemBrandTwo="xx99 mark i"
          itemBrandThree="zx9 speaker"
          productDetailsOne="/headphones-2"
          productDetailsTwo="/headphones-1"
          productDetailsThree="/speaker-1"
        />
        <SectionMiniDetails />
        <SectionShared />
      </div>
      <Footer />
    </>
  );
}

export default HeadPhones3;
