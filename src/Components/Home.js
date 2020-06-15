import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Section from "./Section";
import Footer from "./Footer"
import About from "./About"
import Timeline from "./Timeline"
import Projects from "./Projects"
import Blog from "./Blog"

// Colors: #fabea8 and #30132c
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
            title="Experience"
            subtitle={<Timeline/>}
            dark={true}
            id="experience"
          />
          <Section
            title="Recent Projects"
            subtitle={<Projects/>}
            dark={false}
            id="projects"
          />
          <Section
            title="Blog"
            subtitle={<Blog/>}
            dark={true}
            id="blog"
          />
          {/* <Section
            title="Photography"
            subtitle={dummyText}
            dark={true}
            id="photography"
          /> */}
          <Footer
            id="contact"
          />
        </div>
    );
  }
}

export default Home;
