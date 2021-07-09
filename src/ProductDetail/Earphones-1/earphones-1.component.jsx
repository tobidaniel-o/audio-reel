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

function EarPhones1() {
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
            require("../../assets/product-yx1-earphones/desktop/image-product.jpg")
              .default
          }
          alt="A YX1 Wireless Earphones"
          heading="new product"
          itemBrand="yx1 wireless"
          typeOfItem="earphones"
          aboutProduct="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          price="$599"
          numberOfItem="1"
          productsLink="/earphones"
        />
        <SectionTwo
          firstFeature="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."
          secondFeature="The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
          firstNumberOfUnits="2x"
          firstUnitType="Earphone Unit"
          secondNumberOfUnits="6x"
          secondUnitType="Multi-size Earplugs"
          thirdNumberOfUnits="1x"
          thirdUnitType="User Manual"
          fourthNumberOfUnits="1x"
          fourthUnitType="USB-C Charging Cable"
          fifthNumberOfUnits="1x"
          fifthUnitType="Travel Pouch"
        />
        <SectionThree
          imageSrcOne={
            require("../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg")
              .default
          }
          altOne="A black earphone unit"
          imageSrcTwo={
            require("../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg")
              .default
          }
          altTwo="A black earphone."
          imageSrcThree={
            require("../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg")
              .default
          }
          altThree="A black USB charging cable."
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
            require("../../assets/product-zx7-speaker/desktop/image-product.jpg")
              .default
          }
          altThree="A ZX7 Speaker"
          altOne="A XX99 Mark 1 headphone"
          altTwo="A XX59 headphone "
          itemBrandThree="zx7 speaker"
          itemBrandOne="xx99 mark i"
          itemBrandTwo="xx59"
          productDetailsOne="/headphones-1"
          productDetailsTwo="/headphones-3"
          productDetailsThree="/speaker-2"
        />
        <SectionMiniDetails />
        <SectionShared />
      </div>
      <Footer />
    </>
  );
}

export default EarPhones1;
