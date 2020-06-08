import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll"
import logo from "../logo.svg";

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
            src={logo}
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
              offset={-50}
              duration={300}
            >Projects</Link>
            <Link className="nav-item"
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
            >Experience</Link>
            <Link className="nav-item"
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-350}
              duration={300}
            >Resume</Link>
            <Link className="nav-item"
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-350}
              duration={300}
            >Blog</Link>
            <Link className="nav-item"
              activeClass="active"
              to="photography"
              spy={true}
              smooth={true}
              offset={-350}
              duration={300}
            >Photography</Link>
            <Link className="nav-item"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-350}
              duration={300}
            >Contact</Link>
          </ul>
        </div>
      </nav>
    );
  }
}
