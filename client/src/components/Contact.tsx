import React from 'react';
import '../styles/contact.css';


const Contact= () => {
    return (
        <div className='contact-container'>
            <form action="https://formsubmit.co/a9b4085d9d3877c4e9448f77a3f4cc8c"
            method="POST"  target="_blank" className='contact-form'>
                <h2 className='contact-title'>Contact</h2>
                <fieldset>
                    <label htmlFor="name">Name</label>
                    <input  id='name' type='text'/>
                    <label htmlFor="email">Email</label>
                    <input type='email' />
                    <label className='d-block ' htmlFor="email" >Message</label>
                    <textarea cols={30} rows={12} required ></textarea>
                    <button type='submit' className='contact-button '>Send</button>
                </fieldset>
            </form>
            <div className='contact-info'>
                <h3 className='info-title'>Contact Info</h3>
                <p className='info'>Name: Ionut Ciornei</p>
                <p className='info'>Phone Number: (+40) 759 478 325</p>
                <p className='info'>Email: ciorneiionut94@gmail.com</p>
            </div>
       
        </div>
    )
}

export default Contact;