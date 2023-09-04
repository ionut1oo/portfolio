import { Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap'; 
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Portofolio from './Portofolio';
import Contact from './Contact';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate to="/home" />} /> 
      </Routes>
    </Container>
  );
};

export default App;
