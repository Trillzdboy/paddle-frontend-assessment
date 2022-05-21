import React from 'react';
import classes from './NavigationBar.module.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <>
      <Navbar variant="dark" expand="lg" className={classes.height}>
        <Container>
          <Navbar.Brand href="#home" className='float-start'>METRICKS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto flex">
              <Nav.Link href="#home">ABOUT US</Nav.Link>
              <Nav.Link href="#features">BLOG</Nav.Link>
              <Nav.Link href="#pricing"><Button className={`${classes.button}`}>CONTACT US</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
