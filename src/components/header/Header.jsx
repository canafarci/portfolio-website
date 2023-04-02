import React from "react";
import "./header.css";
import CTA from "./CTA";
import pfpic from "../../assets/pf-image.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <div className="header__row">
      <div className="header__container ">
        <h5>Hi! my name is</h5>
        <h1>Berke Cakir</h1>
        <h3 className="text-light">Developer // Designer</h3>
        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
      <div className="pfimage">
        <img src={pfpic} alt="pfimage" />
      </div>
    </div>
  );
};

export default Header;
