import React from "react";
import Navigation from "../../components/Navigation/navigation.component";
import SectionOne from "../components/SectionOne/section-one-component";
import SectionTwo from "../components/SectionTwo/section-two-component";

import "./headphones-1.styles.scss";

function HeadPhones1() {
  return (
    <>
      <div className="headphones1-header">
        <div className="wrapper">
          <Navigation />
        </div>
      </div>
      <div className="wrapper">
        <SectionOne
          src={
            require("../../assets/category-headphones/desktop/image-xx99-mark-two.jpg")
              .default
          }
          alt="a black xx99 mark ii headphones"
          heading="new product"
          itemBrand="xx99 mark ii"
          itemOfItem="headphones"
          aboutProduct="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          price="$2,999"
          numberOfItem="1"
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
      </div>
    </>
  );
}

export default HeadPhones1;