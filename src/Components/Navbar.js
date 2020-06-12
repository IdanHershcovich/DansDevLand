import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll"
import ResumePDF from "./ResumePDF";
import IH_Logo from "../Media/ih_logo.png"

export default class Navbar extends Component {

  scrollToTop = () => {
    scroll.scrollToTop({
      duration: 400
    });
  }
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={IH_Logo}
            className="nav-logo"
            alt="Logo."
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <Link className="nav-item"
              activeClass="active"
              onClick={this.scrollToTop}
            >Home</Link>
            <Link className="nav-item"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
            >About</Link>
            <Link className="nav-item"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-150}
              duration={300}
            >Projects</Link>
            <Link className="nav-item"
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-150}
              duration={300}
            >Experience</Link>
            <Link className="nav-item"
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-150}
              duration={300}
            >Blog</Link>
            <Link className="nav-item"
              activeClass="active"
              to="photography"
              spy={true}
              smooth={true}
              offset={-150}
              duration={300}
            >Photography</Link>
            <Link className="nav-item"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={300}
            >Contact</Link>
            
            <ResumePDF/>
          </ul>
        </div>
      </nav>
    );
  }
}
