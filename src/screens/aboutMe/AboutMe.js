import React from "react";
import "./about.css";
import profile from "../../images/profile.jpg";

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
      <div>
        <img className="profile" src={profile} alt="profile icon" />
      </div>
      <div className="about__text">
        <h1>About Me</h1>
        <p>
          Technologically advanced and highly adaptable professional with a
          certification in software engineering immersive bootcamp from General
          Assembly and front-end development from Codecademy; ready to leverage
          expertise and contribute to the development of cutting-edge web
          applications as a Frontend Developer. Demonstrated exceptional
          communication and collaboration to coordinate all phases of
          project-based efforts. Skilled in translating product requirements,
          user research, usability feedback, and personal design specifications
          into user-friendly and visually appealing websites/apps. Adept at
          identifying and resolving complex front-end related bug issues
          promptly. Capable of prioritizing and completing multitask assignments
          within stringent deadlines. Dedicated to continually learning emerging
          technologies, tools, techniques, and other best practices in web
          development.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
