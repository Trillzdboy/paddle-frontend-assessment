import React, {useState} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import classes from './NavigationBar.module.css';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar variant="dark" expand="lg" sticky='top' className={classes.navigation_style}>
        <Container>
          <LinkContainer to="/"><Navbar.Brand className='float-start'>METRICKS</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`ms-auto flex`}>
              <LinkContainer to="/about"><Nav.Link className={classes.vertical_align}>ABOUT US</Nav.Link></LinkContainer>
              <LinkContainer to="/blog"><Nav.Link className={classes.vertical_align}>BLOG</Nav.Link></LinkContainer>
              <Nav.Link href="#pricing"><Button onClick={handleShow} className={`${classes.button}`}>CONTACT US</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas className={classes.offset_background} placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton closeVariant='white'>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
          <p className={classes.offset_paragraph}>Hey, we are still in the works,<br /> but you can send us a message!</p>
            <form>
              <div>
                <label className={classes.label_margin} htmlFor='firstname'>First Name</label> <br />
                <input id='firstname' type='text' placeholder='Enter your first name' />
              </div>
              <div>
                <label className={classes.label_margin} htmlFor='lastname'>Last Name</label> <br />
                <input id='lastname' type='text' placeholder='Enter your last name' />
              </div>
              <div>
                <label className={classes.label_margin} htmlFor='email'>Email</label> <br />
                <input id='email' type='email' placeholder='Enter your email' />
              </div>
              <div>
                <label className={classes.label_margin} htmlFor='message'>Tell us what you need help with</label> <br />
                <textarea id='message' placeholder='Enter a topic, like " channel problem... "' />
              </div>
              <div className='pt-3'>
                <Button className={classes.button}>SEND NOW</Button>
              </div>
            </form>
            </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar;
