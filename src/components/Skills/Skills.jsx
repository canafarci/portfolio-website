import React from "react";
import "./skills.css";
import { Grid } from "@material-ui/core";

const Skills = () => {
  const programmingLanguages = ["C#", "C++", "Python", "Javascript"];

  const gameEngines = ["Unity Engine", "Unreal Engine"];

  const designSkills = [
    "3DS Max",
    "Adobe Photoshop",
    "Corona Renderer",
    "Rhinoceros 3D",
    "Substance Painter",
  ];

  const frameworks = ["React", "React-Native", "Angular.js"];

  const languageSkills = ["Turkish", "English", "Spanish"];

  const renderSkillGrid = (skills) => {
    return (
      <Grid container spacing={1}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill}>
            <div className="skill">
              <p>{skill}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <div className="grid-container">
      <h3>Game Engines</h3>
      {renderSkillGrid(gameEngines)}
      <h3>Programming Skills</h3>
      {renderSkillGrid(programmingLanguages)}
      <h3>Design Skills</h3>
      {renderSkillGrid(designSkills)}
      <h3>Frameworks</h3>
      {renderSkillGrid(frameworks)}
      <h3>Language Skills</h3>
      {renderSkillGrid(languageSkills)}
    </div>
  );
};

export default Skills;
