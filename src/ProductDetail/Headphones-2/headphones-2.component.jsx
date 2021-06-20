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

function HeadPhones2() {
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
            require("../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg")
              .default
          }
          alt="a black xx99 mark ii headphones"
          itemBrand="xx99 mark i"
          typeOfItem="headphones"
          aboutProduct="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          price="$1,750"
          numberOfItem="1"
        />

        <SectionTwo
          firstFeature="  As the headphones all others are measured against, the XX99 Mark I
        demonstrates over five decades of audio expertise, redefining the
        critical listening experience. This pair of closed-back headphones are
        made of industrial, aerospace-grade materials to emphasize durability at
        a relatively light weight of 11 oz. "
          secondFeature="From the handcrafted microfiber ear cushions to the robust metal
        headband with inner damping element, the components work together to
        deliver comfort and uncompromising sound. Its closed-back design
        delivers up to 27 dB of passive noise cancellation, reducing resonance
        by reflecting sound to a dedicated absorber. For connectivity, a
        specially tuned cable is included with a balanced gold connector."
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
            require("../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg")
              .default
          }
          altOne="A guy holding a pair of headphones on his head."
          imageSrcTwo={
            require("../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg")
              .default
          }
          altTwo="A black headphones and a phone on a table."
          imageSrcThree={
            require("../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg")
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
        />
        <SectionMiniDetails />
        <SectionShared />
      </div>
      <Footer />
    </>
  );
}

export default HeadPhones2;
