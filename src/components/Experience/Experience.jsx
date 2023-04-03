import React from "react";
import "./experience.css";
import { Typography } from "@material-ui/core";

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="column-container">
        <div className="education">
          <h3>Education</h3>
          <div className="education-item">
            <h4>Middle Eastern Technical University</h4>
            <p>Bachelor's Degree in Architecture</p>
            <p>Graduated in 2019 with Honors and a CGPA of 3.30</p>
          </div>
          <div className="education-item">
            <h4>Universidad Politécnica de Valencia (UPV)</h4>
            <p>Erasmus Exchange Prog-ram</p>
            <p>September 2017 - April 2018</p>
            <p>GPA of 3.6</p>
          </div>
          <div className="education-item">
            <h4>Middle Eastern Technical University</h4>
            <p>Master's Degree in Architecture</p>
            <p>Joined in 2019 and graduated in 2022 with a CGPA of 4.0</p>
          </div>
        </div>
        <div>
          <h3 className="professional-experience">Professional Experience</h3>
          <div className="professional-experience-item">
            <h4>Freelance Designer</h4>
            <p>Freelance Architectural Designer and Interior Designer</p>
            <p>2019 - present</p>
          </div>
          <div className="professional-experience-item">
            <h4>Flowtart Studios</h4>
            <p>Lead Game Developer</p>
            <p>September 2021 - present</p>
          </div>
          <div className="professional-experience-item">
            <h4>Diger Yapim</h4>
            <p>Unity Game Developer</p>
            <p>April 2020 - September 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
