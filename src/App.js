import React from 'react';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap'

function App() {
  return (
    <div className="App">
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootstrap.Navbar.Brand href="#home">My App</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#features">Log In</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#pricing">Contacto</ReactBootstrap.Nav.Link>
      <ReactBootstrap.NavDropdown title="Productos" id="collasible-nav-dropdown">
        <ReactBootstrap.NavDropdown.Item href="#action/3.1">Producto 1</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.2">Producto 2</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.3">Producto 3</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Divider />
        <ReactBootstrap.NavDropdown.Item href="#action/3.4">Producto Premium</ReactBootstrap.NavDropdown.Item>
      </ReactBootstrap.NavDropdown>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Nav>
      <ReactBootstrap.Nav.Link href="#deets">Mas Detalles</ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
    </div>
  );
}

export default App;
