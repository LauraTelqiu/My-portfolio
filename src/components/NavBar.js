import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  return (

    <nav>
      <ul className="list">
        <Link className="items" to="/">Home</Link>
        <Link className="items" to="/about">About</Link>
        <Link className="items" to="/projects">Projects</Link>
        <Link className="items" to="/contact">Contct</Link>
        <Link className="items" to="/resume">Resume</Link>
      </ul>
    </nav>

  );
}
