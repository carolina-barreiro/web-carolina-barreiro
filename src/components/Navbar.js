import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Moon, Sun} from 'react-bootstrap-icons';

function NavbarTop(props) {

  function changeView(){
    props.setNoturnView(!props.noturnView);
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary font-spline">
      <Container>
        <Navbar.Brand href="#home">&lt;<span className="title-navbar font-outfit"> Carolina Barreiro </span>/&gt;</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects" >Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            {props.noturnView?  <Nav.Link onClick={changeView} className="sun-icon"><Sun /></Nav.Link>:  <Nav.Link onClick={changeView} className="moon-icon"><Moon /></Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;