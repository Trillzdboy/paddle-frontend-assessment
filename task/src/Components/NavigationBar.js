import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import classes from './NavigationBar.module.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <>
      <Navbar variant="dark" expand="lg" className={classes.height}>
        <Container>
          <LinkContainer to="/"><Navbar.Brand className='float-start'>METRICKS</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`ms-auto flex`}>
              <LinkContainer to="/about"><Nav.Link className={classes.vertical_align}>ABOUT US</Nav.Link></LinkContainer>
              <LinkContainer to="/blog"><Nav.Link className={classes.vertical_align}>BLOG</Nav.Link></LinkContainer>
              <Nav.Link href="#pricing"><Button className={`${classes.button}`}>CONTACT US</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
