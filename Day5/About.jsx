// AboutPage.js
import React from 'react';
import './About.css';
import NavBar from "./NavBar"

const AboutPage = () => {
  return (
    <div className='about-container'>
        <NavBar/>
      <h1 className='abouth1'>About Us</h1>
      <p className='aboutp'>
        Welcome to our job search platform! We are dedicated to connecting talented individuals with
        exciting job opportunities. Whether you are a job seeker or an employer looking for the
        perfect candidate, we've got you covered.
      </p>
      <p className='aboutp'>
        Our mission is to simplify the job search process and make it easier for both employers and
        job seekers to find the right match. Explore our platform and discover your next career
        move!
      </p>
    </div>
  );
};

export default AboutPage;
