import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs';
import { GrOverview }  from 'react-icons/gr';
import '../styles/projectsStyle.css';
import { Link } from 'react-router-dom';

const Portofolio: React.FC = () => {
  return (
    <>
      <h2 className="text-center text-primary mb-5">Last Project</h2>
      <Card className='cardStyle'>
        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/ecommerce.jpg`} /> 
        <Card.Body>
          <Card.Title className='text-center'>Shop-On</Card.Title>
          <Card.Text>
            E-Commerce Website created for laptops buyers
          </Card.Text>
          <Link to="https://github.com/ionut1oo/ionut1oo.github.io/">
             <Button variant="primary ms-5"><BsGithub/></Button>
          </Link>  
          <Link to="https://ionut1oo.github.io/"> 
             <Button variant="primary" className='ms-2'><GrOverview /></Button>
          </Link>  
        </Card.Body>
      </Card>
    </>
  );
}

export default Portofolio;
