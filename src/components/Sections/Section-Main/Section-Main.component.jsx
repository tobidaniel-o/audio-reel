import React from "react";
import Button from "../../Button/button.component";
import SectionShared from "./Section-Shared/section-shared.component";
import "./section-main.styles.scss";

function SectionMain() {
  return (
    <main>
      <section className="section-main-one">
        <div className="section-main-one-img-container">
          <img
            className="section-main-one-img"
            src={
              require("../../../assets/home/desktop/image-speaker-zx9.png")
                .default
            }
            alt=""
          />
        </div>
        <div className="product-details">
          <p className="title">zx9</p>
          <p className="title">speaker</p>
          <p className="details">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button color="#ffffff" backgroundColor="#000000" />
        </div>
      </section>
      <section className="section-main-two">
        <p>zx7 speaker</p>
        <Button backgroundColor="inherit" border="1px solid #000000" />
      </section>

      <section className="section-main-three">
        <div className="earphones-in-a-case">
          <img
            src={
              require("../../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg")
                .default
            }
            alt="A pair of black earphones in a case."
          />
        </div>

        <div className="earphones-in-a-case-details">
          <p>yx1 speaker</p>
          <Button backgroundColor="inherit" border="1px solid #000000" />
        </div>
      </section>

      <SectionShared />
    </main>
  );
}

export default SectionMain;
