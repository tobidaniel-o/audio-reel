import React from "react";
import "./footer.styles.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-navigation">
          <span className="logo">audioreel</span>
          <ul>
            <li>home</li>
            <li>headphones</li>
            <li>speakers</li>
            <li>earphones</li>
            <li>sign in</li>
          </ul>
        </div>

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
