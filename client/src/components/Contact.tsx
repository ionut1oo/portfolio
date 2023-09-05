import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, resetForm, ContactState } from '../features/contactSlice';
import { RootState } from '../app/store';  // Replace with your actual RootState
import { Button, Container, Alert } from 'react-bootstrap';

const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const formData = useSelector((state: RootState) => state.contact);  // Replace 'state.contact' based on your actual state structure

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name as keyof ContactState, value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://sheltered-forest-33596.herokuapp.com/api/sendEmail', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status >= 200 && response.status < 300 && response.data === 'Email sent') {
        setSuccess(true);
        setError(null);
        console.log('Email successfully sent');
        dispatch(resetForm());
      } else {
        setError('There was an error sending the email');
        setSuccess(false);
        console.error(`Received status code ${response.status}`);
      }
    } catch (error) {
      setError('There was an error sending the email');
      setSuccess(false);
      console.error('There was an error sending the email', error);
    }
  };
  

  return (
    <Container>
      <h1 className='text-center text-primary'>Contact Me</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Email successfully sent!</Alert>}
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            id="name" 
            name="name"
            placeholder='Name'
            autoComplete='name'
            className='mb-2 mt-5'
            value={formData.name} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <input 
            type="email" 
            id="email" 
            name="email"
            placeholder='Email'
            autoComplete='email' 
            className='mb-2'
            value={formData.email} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <textarea 
            id="message" 
            name="message" 
            placeholder='Message'
            autoComplete='on'
            value={formData.message} 
            onChange={handleInputChange} 
          ></textarea>
        </div>
        <Button variant='primary' type="submit">Send Message</Button>
      </form>
    </Container>
  );
};

export default Contact;
