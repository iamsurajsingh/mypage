import React from 'react'
import './about.css';
import SocialContact from '../../Common/SocialContact/SocialContact';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="top-left">
                        <span className>Hello There, 👋 I am </span><br />
                        <span className="myName">Suraj </span> <br />
                        <span>A Software Engineer</span><br />
                        & <br />
                        Upcoming Full Stack Developer
                </div>
                <div className="top-right">
                    <img src={require("../../../assets/Programmer-bro.png")
                        .default} className = "about-photo" alt = ""/>
                </div>
            </div>
            <div className="about-bottom">
                <SocialContact/>
            </div>
        </div>
    )
}

export default About
