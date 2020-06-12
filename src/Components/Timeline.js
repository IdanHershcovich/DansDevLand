import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './Timeline.css';
import { Drexel } from '../Media/Assets';
import Cap from '../Media/grad_cap.png'
import StratisIcon from '../Media/stratis.png';
import VertexIcon from '../Media/vertex.png';

class Timeline extends Component {
    render() {
        return (
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="June 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={
                        <img src={Cap} class='vertical-timeline-element-icon svg' />
                    }
                >
                    <h3 className="vertical-timeline-element-title">Finished Undergraduate Studies at Drexel University</h3>
                    <h4 className="vertical-timeline-element-subtitle">Philadelphia, PA</h4>
                    <p>
                        Bachelor's degree in Computer Science with a concentration in Game Development.
                        GPA: 3.30
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="June 2019 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={
                        <img src={Drexel} class='vertical-timeline-element-icon svg' />
                    }
                >
                    <h3 className="vertical-timeline-element-title">ASH API Senior Project</h3>
                    <h4 className="vertical-timeline-element-subtitle">GSR Lead, Developer</h4>
                    <h5 className="vertical-timeline-element-subtitle">Philadelphia, PA</h5>
                    <p>
                        An API aimed at game developers that looks to provide tailor-made experiences in games by using facial and biometric data. 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="September 2018 - March 2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={
                        <img src={VertexIcon} class='vertical-timeline-element-icon svg' />
                    }
                >
                    <h3 className="vertical-timeline-element-title">Vertex Laboratories</h3>
                    <h4 className="vertical-timeline-element-subtitle">Software Developer</h4>
                    <h5 className="vertical-timeline-element-subtitle">Philadelphia, PA</h5>
                    <p>
                        Developer at an AI analytics company working on multiple client-facing projects and internal software tools.  
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="September 2017 - March 2018"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={
                        <img src={StratisIcon} class='vertical-timeline-element-icon svg' />
                    }
                >
                    <h3 className="vertical-timeline-element-title">STRATIS IOT</h3>
                    <h4 className="vertical-timeline-element-subtitle">Software Engineer, IOT</h4>
                    <h5 className="vertical-timeline-element-subtitle">Philadelphia, PA</h5>
                    <p>
                        IoT platform built for complex multi-family apartments and student housing.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="September 2016 - March 2017"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={
                        <img src={Drexel} class='vertical-timeline-element-icon svg' />
                    }
                >
                    <h3 className="vertical-timeline-element-title">Drexel College of Medicine</h3>
                    <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
                    <h5 className="vertical-timeline-element-subtitle">Philadelphia, PA</h5>
                    <p>
                        Involved in the team creating applications and services for medicine students to use during their time at Drexel.
                    </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={
                        <img src={Drexel} class='vertical-timeline-element-icon svg' />
                    }
                />
            </VerticalTimeline>
        )
    }

}

export default Timeline