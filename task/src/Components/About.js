import React from 'react';
import Footer from './Footer';
import classes from './About.module.css';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container className='text-white'>
      <section className={`${classes.s1_height}`}>
        <div>
          <h1>About Us</h1>
          <h2>Built for Saas and E-commerce</h2>
          <p>
            Our tools are easy to set up and use with a user friendly dashboard
            that enables you to set up, launch, automate and manage
            multi-affiliate campaigns in 5 minutes.
          </p>
        </div>
      </section>

      <section>
        <p>
          Metricks was developed because just like you, we needed a product that
          could give us <b>good value.</b>
        </p>
      </section>

      <section>
        <div>
          <h3>01</h3>
          <h3>Why us?</h3>
          <p>
            We pride ourselves in our ability to innovate and create world-class
            tools that provide reliable and efficient touchpoints between
            advertisers and affiliates.
          </p>
        </div>
        <div>
          <h3>02</h3>
          <h3>Growing with you</h3>
          <p>
            Leveraging the best technology, we have developed an all-in-one
            affiliate marketing tracking software, a genius tool to help you
            track, automate and optimize your influencer campaigns, all from one
            dashboard.
          </p>
          <p>
            Our team of experts are constantly brainstorming, testing and
            developing new solutions with only one thing in mind - your business
            growth. Your success is our success and by giving you the tools you
            need to scale, we grow as well.
          </p>
        </div>
      </section>

      <section>
        <h3>Got a Question?</h3>
        <p>See how Metricks can help your business grow with best Affiliate Marketing Tracking Software.</p>
        <div>
          <p>Contact us</p>
        </div>
      </section>
    </Container>
  );
};

export default About;
