import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Button as SemanticButton} from 'semantic-ui-react'


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
      <Link to='/contact'>
        <SemanticButton animated color="blue" size="huge" style={{ marginBottom: '3rem' }}>
         <SemanticButton.Content visible>
           Contact Us Now
          </SemanticButton.Content>
          <SemanticButton.Content hidden>
           Lets Go!
          </SemanticButton.Content>
        </SemanticButton>
      </Link>
        <p className='footer-subscription-text'>
          Subscribe for the latest news
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link onClick={window.scroll(0,0)} to='/services'>Who are we?</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link onClick={window.scroll(0,0)} to='/contact'>Email Us!</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Software</h2>
            <Link to='/'>Github</Link>
            <Link to='/'>CodePen</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Newlight Projects
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>NLP © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
