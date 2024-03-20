import React from 'react';
import '../styles/contact.css';


const Contact= () => {
    return (
        <div className='contact-container' id='contact'>
            <form action="https://formsubmit.co/a9b4085d9d3877c4e9448f77a3f4cc8c"
             method="POST" className='contact-form' target='__blank'>
                <h2 className='contact-title'>Contact Me</h2>
                <fieldset>
                     <label htmlFor="name">Name</label>
                     <input id='name' type='text' name='name'/>
                     <label htmlFor="email">Email</label>
                     <input type='email' name='email'/>
                     <label className='d-block ' htmlFor="message" >Message</label>
                     <textarea cols={30} rows={12} required name='message'></textarea>
                    <button type='submit' className='contact-button '>Send</button>
                </fieldset>
            </form>
            <div className='contact-info'>
                <h3 className='info-title'>Contact Info</h3>
                <p className='info'>Name: Ionut Ciornei</p>
                <p className='info'>Phone Number: (+44) 746 8311 434</p>
                <p className='info'>Email: ciorneiionut94@gmail.com</p>
            </div>
       
        </div>
    )
}

export default Contact;