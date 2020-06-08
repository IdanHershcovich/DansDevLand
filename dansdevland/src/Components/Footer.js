import React from "react";
import "./Footer.css"
import {github1, instagram1, linkedin1} from "../Media/Assets"

export default function Section({ title, subtitle, dark, id }) {
    return (
        <footer id="contact" class="site-footer" role="contentinfo">
            <div class="social-wrapper">
                <ul>
                    <li>
                        <a href="https://github.com/IdanHershcovich/" target="_blank"> 
                            <img src={github1} alt="GitHub Icon" class="github-icon"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/idan-hershcovich-a12521121/" target="_blank"> 
                            <img src={linkedin1} alt="Linkedin Icon" class="linkedin-icon"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/idan41096/?hl=en" target="_blank"> 
                            <img src={instagram1} alt="Instagram Icon" class="instagram-icon"></img>
                        </a>
                    </li>
                    
                </ul>
            </div>
            <nav class="footer-nav" role="navigation"/>
        </footer>
    );
}
