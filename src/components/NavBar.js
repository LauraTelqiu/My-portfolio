import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contct</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    </header>
  );
}
