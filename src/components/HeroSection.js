import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Spinner.m4v' autoPlay loop muted />
      <h1>PROJECTS FOR A NEW AGE</h1>
      <p>Welcome to the portfolio website for Newlight Projects. Dedicated to creating world class applications for business and private use.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PORTFOLIO
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
