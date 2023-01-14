import React from "react";
import "./aboutMe.css";
import profile from "../../images/profile.jpg";

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
      <div>
        <img className="profile" src={profile} alt="profile icon" />
      </div>
      <div className="about__text">
        {/* <h1>About Me</h1> */}
        <p>
          Software Engineer with a strong foundation in front-end development,
          motivated by solving problems and overcoming challenges,constantly
          seeking opportunities to learn and grow.An organized and determined team member that
          doesn’t fight to outshine everyone, by bringing energy into
          collaboration and working jointly to bring the project seamlessly to
          fruition. A former accounting clerk who brings forward administrative
          skills that result in a more compact outcome for software engineering
          projects. Commitment to collaboration and thoroughness in
          accomplishing tasks, ensure that internal code and user-facing
          products are equally enjoyable to interact with!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
