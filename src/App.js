import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from './Components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>

          <Route exact path="/" component={Home} />
          

      </BrowserRouter>
     
      
    );
  }
}

export default App;
