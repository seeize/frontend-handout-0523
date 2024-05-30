import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import shoes1 from './img/shoes1.jpg'
import shoes2 from './img/shoes2.jpg'
import shoes3 from './img/shoes3.jpg'
import data from './data.js';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className="container">
        <div className="row">
          {
            shoes.map((a, i)=>{
              return(
                <Card shoes={shoes} i={i}/>
              )
            })
          }
        </div>
      </div>
    </div>

  );
}


function Card(props){
  return(
    <>
    <div className='col-md-4'>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="80%"></img>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].price}</p>
    </div>
    </>
  );
}

export default App;