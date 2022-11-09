import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();



  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const resume = () => {
    window.location.replace(
      "https://drive.google.com/file/d/1UCuns5cvRJFisButbn6v9sgVnZj8H4Lq/view?usp=sharing"
    );

  };


  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link className="link" to="/">Home</Link>
        <Link clssName="link" to="/about">About</Link>

        <Link className="link" to="/projects">Projects</Link>

        <Link className="link" onClick={resume} to="/resume">
          Resume
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
