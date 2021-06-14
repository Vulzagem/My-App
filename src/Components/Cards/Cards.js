import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

export const Cards = () =>{
    return <ReactBootstrap.Container>
        <ReactBootstrap.Card style={{ width: '18rem' }}>
  <ReactBootstrap.Card.Body>
    <ReactBootstrap.Card.Title>Card</ReactBootstrap.Card.Title>
    <ReactBootstrap.Card.Subtitle className="mb-2 text-muted">Card Subtitle</ReactBootstrap.Card.Subtitle>
    <ReactBootstrap.Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </ReactBootstrap.Card.Text>
    <ReactBootstrap.ListGroup className="list-group-flush">
    <ReactBootstrap.ListGroupItem>Ejemplo 1</ReactBootstrap.ListGroupItem>
    <ReactBootstrap.ListGroupItem>Ejemlo 2</ReactBootstrap.ListGroupItem>
    <ReactBootstrap.ListGroupItem>Ejemplo 3</ReactBootstrap.ListGroupItem>
  </ReactBootstrap.ListGroup>
  <ReactBootstrap.Button variant="primary">Activar Mensaje</ReactBootstrap.Button>
  </ReactBootstrap.Card.Body>
</ReactBootstrap.Card>
    </ReactBootstrap.Container>
}

export default Cards