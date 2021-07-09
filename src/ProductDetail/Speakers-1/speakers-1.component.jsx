import React from 'react'
import Footer from "../../components/Footer/footer.component";
import Navigation from "../../components/Navigation/navigation.component";
import SectionShared from "../../components/Sections/Section-Main/Section-Shared/section-shared.component";
import SectionMiniDetails from "../../components/Sections/Section-Mini-Details/section-mini-details.component";
import SectionFour from "../components/SectionFour/section-four-component";
import SectionOne from "../components/SectionOne/section-one-component";
import SectionThree from "../components/SectionThree/section-three-component";
import SectionTwo from "../components/SectionTwo/section-two-component";

import "../components/components-header.styles.scss";

function Speaker1() {
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
             require("../../assets/product-zx9-speaker/desktop/image-product.jpg")
               .default
           }
           alt="A ZX9 Speaker"
           heading="new product"
           itemBrand="zx9"
           typeOfItem="speaker"
           aboutProduct="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
           price="$4,500"
           numberOfItem="1"
           productsLink="/speakers"
         />
         <SectionTwo
           firstFeature="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)."
           secondFeature="Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
           firstNumberOfUnits="2x"
           firstUnitType="Speaker Unit"
           secondNumberOfUnits="2x"
           secondUnitType="Speaker Cloth Panel"
           thirdNumberOfUnits="1x"
           thirdUnitType="User Manual"
           fourthNumberOfUnits="1x"
           fourthUnitType="3.5mm 10m Audio Cable"
           fifthNumberOfUnits="1x"
           fifthUnitType="10m Optical Cable"
         />
         <SectionThree
           imageSrcOne={
             require("../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg")
               .default
           }
           altOne="A guy holding a pair of headphones on his head."
           imageSrcTwo={
             require("../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg")
               .default
           }
           altTwo="A black headphones and a phone on a table."
           imageSrcThree={
             require("../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg")
               .default
           }
           altThree="A black headphone."
         />
         <SectionFour
           firstImg={
             require("../../assets/product-zx7-speaker/desktop/image-product.jpg")
               .default
           }
           secondImg={
             require("../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg")
               .default
           }
           thirdImg={
             require("../../assets/product-xx59-headphones/desktop/image-product.jpg")
               .default
           }
           altOne="A ZX7 Speaker"
           altTwo="A XX99 Mark 1 headphone"
           altThree="A XX59 headphone "
           itemBrandOne="zx7 speaker"
           itemBrandTwo="xx99 mark i"
           itemBrandThree="xx59"
           productDetailsOne="/speaker-2"
           productDetailsTwo="/headphones-1"
           productDetailsThree="/headphones-3"
         />
         <SectionMiniDetails />
         <SectionShared />
       </div>
       <Footer />
     </>
   );
}

export default Speaker1
