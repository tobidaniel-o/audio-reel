import React from 'react'
import Footer from "../../components/Footer/footer.component";
import Navigation from "../../components/Navigation/navigation.component";
import SectionShared from "../../components/Sections/Section-Main/Section-Shared/section-shared.component";
import SectionMiniDetails from "../../components/Sections/Section-Mini-Details/section-mini-details.component";
import SectionFour from "../components/SectionFour/section-four-component";
import SectionOne from "../components/SectionOne/section-one-component";
import SectionThree from "../components/SectionThree/section-three-component";
import SectionTwo from "../components/SectionTwo/section-two-component";

function Speaker2() {
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
             require("../../assets/product-zx7-speaker/desktop/image-product.jpg")
               .default
           }
           alt="A ZX7 Speaker"
           itemBrand="zx7"
           typeOfItem="speaker"
           aboutProduct="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
           price="$3,500"
           numberOfItem="1"
           productsLink="/speakers"
         />
         <SectionTwo
           firstFeature="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage."
           secondFeature="The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
           firstNumberOfUnits="2x"
           firstUnitType="Speaker Unit"
           secondNumberOfUnits="2x"
           secondUnitType="Speaker Cloth Panel"
           thirdNumberOfUnits="1x"
           thirdUnitType="User Manual"
           fourthNumberOfUnits="1x"
           fourthUnitType="3.5mm 7.5m Audio Cable"
         />
         <SectionThree
           imageSrcOne={
             require("../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg")
               .default
           }
           altOne="A guy holding a pair of headphones on his head."
           imageSrcTwo={
             require("../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg")
               .default
           }
           altTwo="A black headphones and a phone on a table."
           imageSrcThree={
             require("../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg")
               .default
           }
           altThree="A black headphone."
         />
         <SectionFour
           firstImg={
             require("../../assets/product-zx9-speaker/desktop/image-product.jpg")
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
           altOne="A ZX9 Speaker"
           altTwo="A XX99 Mark 1 headphone"
           altThree="A XX59 headphone "
           itemBrandOne="zx9 speaker"
           itemBrandTwo="xx99 mark i"
           itemBrandThree="xx59"
           productDetailsOne="/speaker-1"
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

export default Speaker2
