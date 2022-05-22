import React from 'react';
import { Container, Card, Row } from 'react-bootstrap';

const List = (props) => {
  return (
    <Container>
      <Row className='m-2'>
        <div className='col-sm-6 col-md-4 my-2'>
          <Card>
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
        </div>
      </Row>
    </Container>
  );
};

export default List;
