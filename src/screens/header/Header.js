import React from "react";
// import profilePic from "../../images/profile.jpg";
import SocialMedia from "../../components/SocialMedia";
import Typed from "react-typed";


import "./header.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        {/* <img src={profilePic} alt="profile"></img> */}
        <h2>Laura Telqiu</h2>
        <h3>Software Engineer</h3>
        <Typed
          strings={[
            " ",
            "Motivated by poroblem solving and completing challenges",
            " ",
            " ",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />

        <div className="prompt">
          <SocialMedia />

        </div>
      </div>
    </div>





  );
}

export default Home;
