import React from 'react';
import classes from './Home.module.css';
import { Button, Card, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className={`${classes.h1} text-center`}>
      <h1 className="text-white">
        SOMETHING AWESOME IS <br /> COMING SOON
      </h1>
      <p className="text-white">
        Your all-in-one affiliate marketing tracking software{' '}
        <b>track, automate</b> and <br /> <b>optimize</b> your campaigns.
      </p>
      <Container className='d-flex justify-content-center'>
            <Card className={`${classes.card} p-3`}><h3>7</h3><p>Days</p></Card>
            <Card className={`${classes.card} p-3`}><h3>24</h3><p>Hours</p></Card>
            <Card className={`${classes.card} p-3`}><h3>54</h3><p>Minutes</p></Card>
            <Card className={`${classes.card} p-3`}><h3>11</h3><p>Seconds</p></Card>
      </Container>
      <form>
        <input className={classes.name_input} type="text" placeholder="First Name.."/>
        <input className={classes.name_input} type="password" placeholder="Last Name.." />
        <div>
          <input className={classes.email_input} type="email" placeholder="Enter your email address.." />
          <Button className={classes.button}>JOIN OUR WAITING LIST</Button>
        </div>
      </form>
    </Container>
  );
};

export default Home;
