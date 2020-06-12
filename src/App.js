import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Footer from "./Components/Footer"
import dummyText from "./DummyText";
import About from "./Components/About"
import Timeline from "./Components/Timeline"
import Cards from "./Components/Cards"
import { BrowserRouter as Router} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
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

export default App;
