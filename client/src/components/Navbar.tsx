import React, { useState } from "react";
import "../styles/navbar.css";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <header id="/">
      <button
        type="button"
        className="hamburger"
        aria-controls="primary-navigation"
        aria-expanded={isVisible.toString() as unknown as boolean}
        onClick={handleClick}
      >
      <span className={`span1 ${isVisible ? 'cross' : ''}`}></span>
      <span className={`span2 ${isVisible ? 'cross' : ''}`}></span>
      <span className={`span3 ${isVisible ? 'cross' : ''}`}></span>

      </button>
      <nav className="navbar-container">
        <img src="imgs/logo.jpg" alt="logo" className="logo" />
        <div id="primary-navigation" 
          className={`nav-link-container ${isVisible ? 'show' : ''}`}
        >
          <LinkScroll to='home' activeClass="active" spy={true} 
          smooth={true} offset={50} duration={500}  
          className="nav-link">Home</LinkScroll>
          <LinkScroll to='about' 
           activeClass="active" spy={true} 
           smooth={true} offset={50} duration={500}  
           className="nav-link">About</LinkScroll>
          <LinkScroll to='skills' 
           activeClass="active" spy={true} 
           smooth={true} offset={50} duration={500} 
            className="nav-link">Skills</LinkScroll>
          <LinkScroll to='projects'  activeClass="active" spy={true} 
          smooth={true} offset={50} duration={500} 
          className="nav-link">Projects</LinkScroll>
          <LinkScroll to='contact'  activeClass="active" spy={true} 
          smooth={true} offset={50} duration={500}  
          className="nav-link">Contact</LinkScroll>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;  