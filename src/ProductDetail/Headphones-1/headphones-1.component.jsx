import React from "react";
import Navigation from "../../components/Navigation/navigation.component";
import SectionOne from "../components/SectionOne/section-one-component";

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
        
      </div>
    </>
  );
}

export default HeadPhones1;
