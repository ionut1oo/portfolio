import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/contact.css';


const Contact= () => {
    return (
        <Container>
            <h3 className='mt-5 text-primary'> <strong> Contact Me </strong> </h3>
            <form action="https://formsubmit.co/a9b4085d9d3877c4e9448f77a3f4cc8c" method="POST">
                <label htmlFor="firstName" className='mt-3'> First name </label>
                <input className='d-block ' id='firstName' type='text'/>
                <label htmlFor="lastName"> Last name </label>
                <input className='d-block ' type='text' name='lastName'/>
                <label htmlFor="email"> Email </label>
                <input className='d-block' type='email' name='name'/>
                <label className='d-block ' htmlFor="email" > Message </label>
                <textarea name="message" cols={30} rows={5} required ></textarea>
                <button type='submit' className='d-block contact-button '> Send </button>
            </form>
        </Container>
    )
}

export default Contact;