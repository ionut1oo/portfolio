import React from "react";
import "../styles/projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="project-card">
        <img className="projects-photo" src="imgs/shop-on.png" alt="shop-on" />
        <h3 className="project-name">Shop-On</h3>
        <h4 className="project-description">React, TypeScript, ReduxToolkit, Bootstrap</h4>
        <Link to="https://ionut1oo.github.io/Shop-On-V2/"  target='_blank' >
          <button className="project-button">Visit Website</button>
        </Link>
      </div>
      <div className="project-card">
      <img className="projects-photo" src="imgs/florentina-petrea-nails.png" alt="shop-on" />
        <h3 className="project-name">Florentina Petrea Nails</h3>
        <h4 className="project-description">React, TypeScript, ReduxToolkit, Bootstrap</h4>
        <Link to="https://ionut1oo.github.io/florentina-petrea-nails/"  target='_blank' >
          <button className="project-button">Visit Website</button>
        </Link>
      </div>
      <div className="project-card">
        <img className="projects-photo" src="imgs/flavour-of-romania.png" alt="shop-on" />
        <h3 className="project-name">Flavours Of Romania</h3>
        <h4 className="project-description">React, TypeScript, ReduxToolkit, Bootstrap</h4>
        <Link to="https://ionut1oo.github.io/flavours-of-romania/"  target='_blank' >
          <button className="project-button">Visit Website</button>
        </Link>
      </div>
    </div>
  )
}

export default Projects;