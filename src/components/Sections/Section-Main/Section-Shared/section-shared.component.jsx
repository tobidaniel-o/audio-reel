import React from "react";
import "./section-shared.styles.scss";

function SectionShared() {
  return (
    <section className="section-shared">
      <article className="article-main">
        <div className="article-container">
          <p className="article-heading-one">bringing you the</p>
          <p className="article-heading-one">
            <span>best</span> audio gear
          </p>
        </div>
        <p className="article">
          Located at the heart of New York City, Audioreel is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audioreel the best
          place to buy your portable audio equipment.
        </p>
      </article>
      <div className="article-image">
        <img
          src={
            require("../../../../assets/shared/desktop/image-best-gear.jpg")
              .default
          }
          alt="A guy with a headphone across his head listening to music."
        />
      </div>
    </section>
  );
}

export default SectionShared;
