import React from "react";
import profile from "../../images/profile.jpg";
import "./about.css";

function AboutMe() {


  function handleClick() {
    window.location.href = 'https://drive.google.com/file/d/1g9GyoSs0qxrXhaA5kTCJ63_tanFuhEVU/view?usp=sharing';
  }

  return (
    <div className="aboutMe" id="about-me">
      <div className="about_container">
        <div className="about_contents">
          <section className="imageSection">
            <img className="profile" src={profile} alt="profile icon" />
          </section>
          <section className="infoSection">
            <h1>About Me</h1>
            <h2>Frontend Developer</h2>
            <p>
              Hi there! I'm Laura Telqiu, a highly skilled and adaptable Front-End Developer with a passion for building cutting-edge web applications. I have a certification in Software Engineering from General Assembly and Front-End Development from Codecademy, bringing extensive experience and expertise in React, Javascript, HTML, CSS, Node.js, Express, MongoDB, and other technologies.
            </p>
            <p>
              In addition to my technical expertise, I also have experience as an Accounts Payable Clerk at D.F. King & Co., Inc., where I developed a strong attention to detail and problem-solving skills. These skills have been instrumental in my transition to Front-End Development, where I am responsible for designing and implementing user interfaces with a high level of accuracy.
            </p>
            <p>
              With my experience in both accounting and web development, I have developed strong organizational and time-management skills, allowing me to manage complex projects with tight deadlines effectively. I am dedicated to continually learning emerging technologies and best practices in web development, ensuring that I always bring innovative solutions to the table.
            </p>
            <p>
              Overall, my proven track record of successfully managing complex projects and resolving issues promptly, coupled with my transferable skills gained from my experience as an Accounts Payable Clerk, makes me a valuable asset to any team in the field of Front-End Development.
            </p>
            {/* <div className="personalInfo">
              <div>
                <span>Name:</span>
                <span>Laura Telqiu</span>
              </div>
              <div>
                <span>Email:</span>
                <span>lauratelqiu@gmail.com</span>
              </div>
            </div> */}
            <div className="button">
              <button onClick={handleClick}>Resume</button>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

// import React from "react";
// import "./about.css";
// import profile from "../../images/profile.jpg";

// function AboutMe() {
//   return (
//     <div className="about__container" id="about-me">
//       <div>
//         <img className="profile" src={profile} alt="profile icon" />
//       </div>
//       <div className="about__text">
//         <h1>About Me</h1>
//         <p>
//           Technologically advanced and highly adaptable professional with a
//           certification in software engineering immersive bootcamp from General
//           Assembly and front-end development from Codecademy; ready to leverage
//           expertise and contribute to the development of cutting-edge web
//           applications as a Frontend Developer. Demonstrated exceptional
//           communication and collaboration to coordinate all phases of
//           project-based efforts. Skilled in translating product requirements,
//           user research, usability feedback, and personal design specifications
//           into user-friendly and visually appealing websites/apps. Adept at
//           identifying and resolving complex front-end related bug issues
//           promptly. Capable of prioritizing and completing multitask assignments
//           within stringent deadlines. Dedicated to continually learning emerging
//           technologies, tools, techniques, and other best practices in web
//           development.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AboutMe;
