import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { Cards } from './Components/Cards/Cards';
import { NavBar } from './Components/Navbar/NavBar';


function App() {
  return (<>
    <NavBar />
    <ReactBootstrap.Container>
      <br></br>
      <h2> Productos </h2>
      <br></br>
    </ReactBootstrap.Container>
    <Cards />
    </>
  );
}



export default App;

