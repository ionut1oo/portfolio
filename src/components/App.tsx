import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Portofolio from './Portofolio';
import Contact from './Contact';

const App: React.FC = () => {
  return (
    <Container fluid>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portofolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Container>
  );
};

export default App;
