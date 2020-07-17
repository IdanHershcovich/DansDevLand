import React, { Component } from "react";
import ProfilePic from "../Media/Profile_Pic.jpg";

export default class extends Component {
    render() {
        return (
            <div>
                <div>
                <img src={ProfilePic} style={{float:"left", height:"200px", width:"200px", border:"1px"}}/>
                    <h5 style={{ margin: 0 }}>Idan Hershcovich</h5>
                    <h6 >Computer Science graduate with a game development concentration. </h6>
                </div>
                <div>
                    <p>
                        Born in the sunshine state of Florida but lived 18 years in the beautiful country of Panama before returning to the US for my college years.
                        I first got interested in software and technoogy ever since I discovered jailbroken iPhones back in high-school and the endless possibilities it had.
                        I've been tinkering with devices ever since. When I started my formal education at Drexel, I fell in love with new technologies. The fast-paced environment made discovering technologies
                        easy, but there was never enough time to deep-dive into them. Because of this, I'm always looking for my next obsession and my next opportunity to dig deeper.
                        When I'm not working, I can often be found playing video games or card games, spending time with friends or making a mess of my desk with my Raspberry Pi and assorted parts.
                    </p>
                </div>
            </div>
        )
    }
}




// About me Text

// Idan Hershcovich
// Computer Science graduate with a game development concentration. 

