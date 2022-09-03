import React from "react";
import profile from "../Assets/images/pic00.jpg";
import "./Home.css"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div className="home-page">
      <div>
        <img className="profile-pic" src={profile} alt="" />

        <h1>Hi. I'm Laura Telqiu.</h1>

        <p>Software Engineer</p>
        <Button className="learn-more-btn">
          <Link className="learn-more-link" to="/about">Learn more About me</Link>
        </Button>
      </div>
    </div>
  );
}
