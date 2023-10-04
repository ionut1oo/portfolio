import React from "react";
import { Container, Image } from "react-bootstrap";
import '../styles/aboutMe.css';

const AboutMe:React.FC = () => {
    return (
      <Container className="about-me-container">
         <Image src={`${process.env.PUBLIC_URL}/img/aboutme.jpg`}  alt="me" className="photo"/>
         <div className="style-content"> 
            <h2 className="text-primary"> About Me </h2>
            <p> Hi, I'm Ionut Ciornei! I'm transitioning from a career as a driver to pursue my passion for Front-End Development. </p>
            <p> With skills in HTML, CSS, JavaScript, TypeScript, React, Boostrap, ReduxToolkit, and Git, I aim to create user experiences that are both intuitive and dynamic. </p>
            <p> My background has instilled in me a keen attention to detail and a unique approach to problem-solving. </p>
            <p> I'm actively seeking opportunities to grow in this exciting new field. </p> 
         </div>
      </Container>
    )
}

export default AboutMe;
