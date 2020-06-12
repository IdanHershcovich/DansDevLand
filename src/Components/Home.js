import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Section from "./Section";
import Footer from "./Footer"
import dummyText from "../DummyText";
import About from "./About"
import Timeline from "./Timeline"
import Cards from "./Cards"


import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <Section
            title="About"
            subtitle={<About/>}
            dark={false}
            id="about"
          />
          <Section
            title="Recent Projects"
            subtitle={<Cards/>}
            dark={false}
            id="projects"
          />
          <Section
            title="Experience"
            subtitle={<Timeline/>}
            dark={true}
            id="experience"
          />
          {/* <Section
            title="Resume"
            subtitle={dummyText}
            dark={true}
            id="resume"
          /> */}
          <Section
            title="Blog"
            subtitle={dummyText}
            dark={true}
            id="blog"
          />
          <Section
            title="Photography"
            subtitle={dummyText}
            dark={true}
            id="photography"
          />
          <Footer
            id="contact"
          />
        </div>
     
      
    );
  }
}

export default Home;
