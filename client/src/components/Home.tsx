import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import '../styles/home.css';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Home:React.FC = () => {
    return (
        <Container className='mt-5 container' fluid>
            <section className='content-wrapper'>
                <article className='text-section'>
                    <h1 className='header text-primary'> Hi! I'm Ionut Ciornei </h1>
                    <div className='style'>
                        <p> I'm on a mission to create intuitive and dynamic user experiences. </p>
                        {/* CTA Button */}
                        <Link to="/projects">  {/* Adjust the link as needed */}
                            <Button variant="primary" className="ms-3">
                                Portofolio
                            </Button>
                        </Link>
                        <Link to="/contact">
                        <Button variant="primary" className="ms-3">
                                Contact Me
                            </Button>
                        </Link>
                    </div>
                </article>
                <Image src={`${process.env.PUBLIC_URL}/img/me (2).jpg`} alt="me" className='imgStyle' aria-label="Picture of me"/> 
            </section>
        </Container>
    )
};

export default Home;
