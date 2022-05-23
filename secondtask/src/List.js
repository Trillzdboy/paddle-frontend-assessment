import React from 'react';
import classes from './List.module.css';
import { Container, Card } from 'react-bootstrap';

const List = (props) => {
  return (
      // <Container>
        <Card className={classes.card_style}>
          <Card.Img variant="top" src={props.avatar} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              Description: {props.description} <br />
              Stars: {props.stars} <br />
              Issues: {props.issues} <br />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">BY: {props.username}</small>
          </Card.Footer>
        </Card>
      // </Container>
  );
};

export default List;
