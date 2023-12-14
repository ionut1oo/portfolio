import React from 'react';
import '../styles/home.css';
import { FaLinkedin, FaGithub, FaFacebook  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='business-card'>
      <h1 className='role'>Junior Frontend Developer</h1>
      <hr className='horiz-card'/>
      <p className='my-name'>Ciornei Ionut</p>
      <p>(+40) 759 478 325</p>
      <p>ciorneiionut94@gmail.com</p>
      <div className='social-contact'>
        <Link  to='https://www.linkedin.com/in/ionut-ciornei/' 
        target='_blank'  className='social-icons'>
          <FaLinkedin />
        </Link>
        <Link to='https://github.com/ionut1oo'
        target='_blank' className='social-icons'>
          <FaGithub />
        </Link>
        <Link to='https://www.facebook.com/ionut.ciornei.96'
        target='_blank' className='social-icons'>
          <FaFacebook />
        </Link>
      </div>
      </div>
      <img className='me-photo' src='imgs/me.png' alt="me" />
    </div>
  );
};

export default Home;