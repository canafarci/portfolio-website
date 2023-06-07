import React from "react";
import { FaLinkedin, FaGithub, FaBehanceSquare } from "react-icons/fa";
import "./header.css";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/canafarci" target="_blank">
        <FaGithub size={30} className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/berkecakir/" target="_blank">
        <FaLinkedin size={30} className="icon" />
      </a>
      <a href="https://www.behance.net/berkecakir" target="_blank">
        <FaBehanceSquare size={30} className="icon" />
      </a>
    </div>
  );
};

export default HeaderSocials;
