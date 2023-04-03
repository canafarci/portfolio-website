import React from "react";
import "./about.css";
import { Typography } from "@material-ui/core";

const About = () => {
  return (
    <div className="about-container">
      <h3>About Me</h3>
      <p>
        My name is İsmet Berke Çakır, and I was born on November 2nd, 1995, in
        Ankara, Turkey. I graduated from the Middle Eastern Technical University
        with a Bachelor's degree in Architecture in 2019, where I earned honors
        and a CGPA of 3.30. During my time at university, I discovered my
        passion for programming while extensively using Rhinoceros extension
        Grasshopper, a GUI programming tool for creating parametric designs
        built on top of the Python language.
      </p>
      <p>
        After graduating, I started my Master's studies, where I delved into
        programming even further. I learned Unity, C#, and TensorFlow while
        searching for thesis subjects. I ultimately settled on conducting
        sensitivity analysis on a city-scale global warming calculation tool
        written in Python called Urban Weather Generator.
      </p>
      <p>
        Around the same time, I began developing games in Unity with a startup
        called Diger Yapım, where I served as the main programmer. Our stint
        lasted for nearly a year, from April 2020 to September 2021. After that,
        I joined Flowtart Studios as the main developer, where I led two other
        developers. So far, we have created over 30 mobile game prototypes in
        various genres, including hypercasual, casual, Idle-Arcade, competitive
        multiplayer, Idle-Clicker, and more.
      </p>
      <p>
        In addition to Unity, I also use Unreal Engine and have created an RPG
        project, as well as various PC game prototypes from game jams and
        personal passion projects.
      </p>
      <p>
        My background in architecture has given me a unique perspective on game
        development, allowing me to approach problem-solving and design from a
        different angle. I am passionate about creating immersive, interactive
        experiences that engage and challenge players.
      </p>
    </div>
  );
};

export default About;
