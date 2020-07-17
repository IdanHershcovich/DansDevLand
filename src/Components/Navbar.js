import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll"
import "./Navbar.css"
import IH_Logo from "../Media/ih_logo.png"
import Pdf from "../Media/Idan_Hershcovich_2020.pdf";

import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

export default class Navbars extends Component {
  state = {
    isTop:true,
    navBG: ''
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100 ? "transparent" : "#543337";
      if (isTop !== this.state.isTop) {
        this.setState({isTop})
        this.setState({navBG: isTop})
      }
    })
  }
  scrollToTop = () => {
    scroll.scrollToTop({
      duration: 400
    });
    this.setState.isTop = true;
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" style={{backgroundColor:this.state.navBG}} expand="lg">
          <Navbar.Brand>
            <img
              src={IH_Logo}
              width="55"
              height="55"
              className="d-inline-block align-top"
              alt="IH Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Nav.Link onClick={this.scrollToTop}>Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link active="active" href="#experience">Experiences</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link onSelect={() => scroll.scrollTo('Blog', {
    smooth: true,
    offset: -70,
    duration: 500,
})} href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href={Pdf}>Resume</Nav.Link>
              {/* <NavDropdown title="Photography" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Japan</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">March of the Living</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <nav className="nav" id="navbar">
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

              <ResumePDF />
            </ul>
          </div>
        </nav> */}
      </div>
    );
  }
}
