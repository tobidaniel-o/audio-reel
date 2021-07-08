import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/navigation.component";

import "./footer.styles.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <Navigation />
        <div className="about-and-social-icons">
          <div className="about-and-social-icons-container">
            <p className="about">
              Audioreel is an all in one stop to fulfill your audio needs. We're
              a small team of music lovers and sound specialists who are devoted
              to helping you get the most out of personal audio. Come and visit
              our demo facility - we’re open 7 days a week.
            </p>
          </div>

          <div className="social-icons">
            <img
              src={
                require("../../assets/shared/desktop/icon-facebook.svg").default
              }
              alt="Facebook icon"
            />
            <img
              src={
                require("../../assets/shared/desktop/icon-twitter.svg").default
              }
              alt="Twitter icon"
            />
            <img
              src={
                require("../../assets/shared/desktop/icon-instagram.svg")
                  .default
              }
              alt="Instagram icon"
            />
          </div>
        </div>
        <p className="copyright">Copyright 2021. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
