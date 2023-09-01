import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, resetForm, ContactState } from '../features/contactSlice';
import { RootState } from '../app/store';  // Replace with your actual RootState
import { Container } from 'react-bootstrap';

const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.contact);  // Replace 'state.contact' based on your actual state structure

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name as keyof ContactState, value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/sendEmail', formData);
      if (response.data === 'Email sent') {
        console.log('Email successfully sent');
        dispatch(resetForm());
      }
    } catch (error) {
      console.error('There was an error sending the email', error);
    }
  };

  return (
    <Container>
      <h1 className='text-center text-primary'>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            id="name" 
            name="name"
            placeholder='Name' 
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
            placeholder='email' 
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
            value={formData.message} 
            onChange={handleInputChange} 
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      </Container>
  );
};

export default Contact;
