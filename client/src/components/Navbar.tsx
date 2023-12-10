import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom"; 
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <header>
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
          <Link to='/home' className="nav-link">Home</Link>
          <Link to='/about' className="nav-link">About</Link>
          <Link to='/skills' className="nav-link">Skills</Link>
          <Link to='/projects' className="nav-link">Projects</Link>
          <Link to='/contact' className="nav-link">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;  