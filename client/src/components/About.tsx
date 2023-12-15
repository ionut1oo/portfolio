import React from "react";
import '../styles/about.css';

const About = () => {
    return (
      <div className="about-container" id="about">
         <div>
          <h2 className="about-title">About</h2>
          <img src="imgs/about-photo.png" alt="aboutPhoto"  className="about-photo"/>
         </div>
         <div className="description">
          <p>I am a highly motivated and adaptable professional who is enthusiastic about transitioning into a junior front-end developer role.</p>
          <br />
          <p>I am recognized for my strong communication skills, effective time management abilities, and a natural talent for solving complex problems.</p>
          <br />
          <p>I am dedicated to delivering top-notch work and making a positive impact on your esteemed organization. I am confident in my capacity to align with your company's objectives and mission.</p>
         </div>
      </div>
    )
}

export default About;
