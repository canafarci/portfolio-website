import React from "react";
import "./contact.css";

const mailtoHref = "mailto:ismetberke@gmail.com?subject= &body= ";
const Contact = () => {
  return (
    <div id="contact" className="contact_container">
      <h3>Contact Me</h3>
      <div className="grid">
        <div className="box">
          <div>
            <span className="bold"> Mail:</span>
            {"  "}
            <span className="medium">ismetberke@gmail.com</span>
          </div>
          <div>
            <span className="bold">Phone:</span>
            {"  "}
            <span className="medium">+90 506 934 84 39</span>
          </div>
        </div>
        <div className="vl"> </div>
        <div className="box">
          <a href={mailtoHref} className="btn">
            Send an Email to me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
