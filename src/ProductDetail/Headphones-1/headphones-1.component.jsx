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

function HeadPhones1() {
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
            require("../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg")
              .default
          }
          alt="a black xx99 mark ii headphones"
          heading="new product"
          itemBrand="xx99 mark ii"
          typeOfItem="headphones"
          aboutProduct="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          price="$2,999"
          numberOfItem="1"
          productsLink="/headphones-category"
        />
        <SectionTwo
          firstFeature="Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat."
          secondFeature="The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic. "
          firstNumberOfUnits="1x"
          firstUnitType="Headphone Unit"
          secondNumberOfUnits="2x"
          secondUnitType="Replacement Earcups"
          thirdNumberOfUnits="1x"
          thirdUnitType="User Manual"
          fourthNumberOfUnits="1x"
          fourthUnitType="3.5mm 5m Audio Cable"
          fifthNumberOfUnits="1x"
          fifthUnitType="Travel Bag"
        />
        <SectionThree
          imageSrcOne={
            require("../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg")
              .default
          }
          altOne="A guy holding a pair of headphones on his head."
          imageSrcTwo={
            require("../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg")
              .default
          }
          altTwo="A black headphones and a phone on a table."
          imageSrcThree={
            require("../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg")
              .default
          }
          altThree="A black headphone."
        />
        <SectionFour
          firstImg={
            require("../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg")
              .default
          }
          secondImg={
            require("../../assets/product-xx59-headphones/desktop/image-product.jpg")
              .default
          }
          thirdImg={
            require("../../assets/product-zx9-speaker/desktop/image-product.jpg")
              .default
          }
          altOne="A XX99 Mark 1 headphone"
          altTwo="A XX59 headphone"
          altThree="A ZX9 Speaker "
          itemBrandOne="xx99 mark i"
          itemBrandTwo="xx59"
          itemBrandThree="zx9 speaker"
          productDetailsOne="/headphones-1"
          productDetailsTwo="/headphones-3"
          productDetailsThree="/speaker-1"
        />
        <SectionMiniDetails />
        <SectionShared />
      </div>
      <Footer />
    </>
  );
}

export default HeadPhones1;
