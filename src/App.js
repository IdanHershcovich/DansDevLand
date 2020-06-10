import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Footer from "./Components/Footer"
import dummyText from "./DummyText";
import Timeline from "./Components/Timeline"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="About"
          subtitle={dummyText}
          dark={false}
          id="about"
        />
        <Section
          title="Projects"
          subtitle={<Timeline/>}
          dark={true}
          id="projects"
        />
        <Section
          title="Experience"
          subtitle={dummyText}
          dark={false}
          id="experience"
        />
        <Section
          title="Resume"
          subtitle={dummyText}
          dark={true}
          id="resume"
        />
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

export default App;
