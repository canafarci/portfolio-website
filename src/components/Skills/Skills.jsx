import React from "react";
import "./skills.css";
import { Grid } from "@material-ui/core";

const Skills = () => {
  const programmingLanguages = [
    { name: "C#", proficiency: 90 },
    { name: "C++", proficiency: 75 },
    { name: "Python", proficiency: 90 },
    { name: "Javascript", proficiency: 65 },
  ];
  const gameEngines = [
    { name: "Unity Engine", proficiency: 95 },
    { name: "Unreal Engine", proficiency: 75 },
  ];

  const designSkills = [
    { name: "3DS Max", proficiency: 95 },
    { name: "Adobe Photoshop", proficiency: 95 },
    { name: "Corona Renderer", proficiency: 93 },
    { name: "Rhinoceros 3D", proficiency: 75 },
    { name: "Substance Painter", proficiency: 75 },
  ];

  const frameworks = [
    { name: "React", proficiency: 65 },
    { name: "React-Native", proficiency: 75 },
    { name: "Angular.js", proficiency: 50 },
  ];
  const languageSkills = [
    { name: "Turkish", proficiency: 100 },
    { name: "English", proficiency: 95 },
    { name: "Spanish", proficiency: 50 },
  ];

  const renderSkillGrid = (skills) => {
    return (
      <Grid container spacing={1}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.name}>
            <div className="skill">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div
                  className="skill-bar-filled"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
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
