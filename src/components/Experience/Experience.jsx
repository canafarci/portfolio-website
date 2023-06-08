import React from "react";
import "./experience.css";
import { Typography } from "@material-ui/core";

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="exp_contents">
        <div className="item_container">
          <h3>Education</h3>
          <div>
            <h4>Middle Eastern Technical University</h4>
            <p>Bachelor's Degree in Architecture</p>
            <i>Graduated in 2019 with Honors and a CGPA of 3.30</i>
          </div>
          <div>
            <h4>Universidad Politécnica de Valencia (UPV)</h4>
            <p>Erasmus Exchange Program</p>
            <p>September 2017 - April 2018</p>
            <i>CGPA of 3.6</i>
          </div>
          <div>
            <h4>Middle Eastern Technical University</h4>
            <p>Master's Degree in Architecture</p>
            <i>Graduated in 2022 with a CGPA of 4.0</i>
          </div>
        </div>
        <div className="item_container">
          <h3>Professional Experience</h3>
          <div>
            <h4>Freelance Designer</h4>
            <p>Freelance Architectural Designer and Interior Designer</p>
            <i>2019 - present</i>
          </div>
          <div>
            <h4>Flowtart Studios</h4>
            <p>Lead Game Developer</p>
            <i>September 2021 - present</i>
          </div>
          <div>
            <h4>Diger Yapim</h4>
            <p>Unity Game Developer</p>
            <i>April 2020 - September 2021</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
