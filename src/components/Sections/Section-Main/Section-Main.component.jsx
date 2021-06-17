import React from "react";
import Button from "../../Button/button.component";
import "./Section-Main.styles.scss";

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
    </main>
  );
}

export default SectionMain;
