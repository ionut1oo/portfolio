import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';  // Import the CSS

const Header: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand>&lt;Ionut &#47;&#62;</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link to='/home' as={NavLink} className='Nav-link'>Home</Nav.Link>
            <Nav.Link to='/about-me' as={NavLink} className='Nav-link'>About Me</Nav.Link>
            {/* <Nav.Link to='/skills' as={NavLink}>Skills</Nav.Link>
            <Nav.Link to='/qualification' as={NavLink}>Qualification</Nav.Link> */}
            <Nav.Link to='/projects' as={NavLink} className='Nav-link'>Portfolio</Nav.Link>
            <Nav.Link to='/contact' as={NavLink} className='Nav-link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
