import React from 'react';
import classes from './Footer.module.css';
import { Container } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faYoutube, faFacebookF, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Container className='text-center text-white mt-5'>
    <ul className={`list-unstyled list-inline`}>
      <li className={`list-inline-item icon_spacing`}><FontAwesomeIcon icon={faYoutube} /></li>
      <li className={`list-inline-item icon_spacing`}><FontAwesomeIcon icon={faFacebookF} /></li>
      <li className={`list-inline-item icon_spacing`}><FontAwesomeIcon icon={faLinkedinIn} /></li>
      <li className={`list-inline-item icon_spacing`}><FontAwesomeIcon icon={faInstagram} /></li>
      <li className={`list-inline-item icon_spacing`}><FontAwesomeIcon icon={faTwitter} /></li>
    </ul>
    <div className='mt-4'>
      <span>Terms of services</span>
      <span>Privacy policy</span>
      <p className='mt-4'>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p>
    </div>
    </Container>
  );
};

export default Footer;