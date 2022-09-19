import React from 'react'
import "../styles/Skills.css"

function Skills() {
  return (
    <div className="skills">

      <h1 id="sk"> Skills</h1>
      <ol className="list">
        <li className="item">
          <h2> Front-End</h2>
          <span>
            ReactJS | React Native | Redux | HTML | CSS | NPM | MaterialUI | Styled-components
          </span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>
            NodeJS | REST API | ExpressJS | MongoDB | Mongoose | Django | SQL |
            PeeWe | Flask
          </span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>JavaScript, Python, TypeScript</span>
        </li>
      </ol>
    </div>
  )
}

export default Skills
