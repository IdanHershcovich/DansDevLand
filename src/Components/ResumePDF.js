import React, { Component } from 'react';
import Pdf from "../Media/Idan_Hershcovich_2020.pdf";

export default class ResumePDF extends Component {
    render() {
        return (
            
                <a href={Pdf} style={{ textDecoration: 'none' }} className="nav-item" target="_blank">Resume</a>
            
        );
    }
}