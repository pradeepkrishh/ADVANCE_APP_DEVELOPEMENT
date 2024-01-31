// ContactPage.js
import React, { useState } from 'react';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add logic to send the form data to the server or perform other actions
  };

  return (
    <div className='contact-container'>
      <h1 className='conh1'>Contact Us</h1>
      <form onSubmit={handleSubmit} className='conform'>
        <div className='form-group'>
          <label htmlFor='name' className='conlabel'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            className='coninput'
            onChange={handleChange} style={{backgroundColor:"white"}}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email' className='conlabel'>Email:</label>
          <input
            type='email'
            id='email'
            className='coninput'
            name='email'
            value={formData.email}
            onChange={handleChange}  style={{backgroundColor:"white"}}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='message' className='conlabel'>Message:</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            className='contextarea'
            onChange={handleChange}  style={{backgroundColor:"white"}}
            required
          ></textarea>
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
