import React from "react";
import './section-three.styles.scss'


function SectionThree({
  imageSrcOne,
  altOne,
  imageSrcTwo,
  altTwo,
  imageSrcThree,
  altThree,
}) {
  return (
    <>
      <div className="images-container">
        <div className="two-images-container">
          <div className="image-one">
            <img src={imageSrcOne} alt={altOne} />
          </div>
          <div className="image-two">
            <img src={imageSrcTwo} alt={altTwo} />
          </div>
        </div>

        <div className="image-three">
          <img src={imageSrcThree} alt={altThree} />
        </div>
      </div>
    </>
  );
}

export default SectionThree;
