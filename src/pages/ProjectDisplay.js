import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "mui-button";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const gitClick = () => {
    window.location.replace(project.gitUrl);

  }
  const liveClick = () => {
    window.location.replace(project.liveUrl);

  }

  return (
    <div className="project">

      <h1> {project.name}</h1>


      <img src={project.image} alt="display" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="buttons">
        <Button id="liveButton" onClick={liveClick}>Live</Button>

        <GitHubIcon id="gitButton" onClick={gitClick}></GitHubIcon>
      </div>

    </div>
  );
}

export default ProjectDisplay;
