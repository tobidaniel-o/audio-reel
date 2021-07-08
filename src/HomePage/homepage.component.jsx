import React from "react";
import Header from "../components/Header/header.component";
import Sections from "../components/Sections/sections.component";
import Footer from "../components/Footer/footer.component";
import Navigation from "../components/Navigation/navigation.component";

function HomePage() {
  return (
    <div>
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}

export default HomePage;
