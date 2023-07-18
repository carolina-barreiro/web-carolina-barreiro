import React, { useState } from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Moon, Sun } from 'react-bootstrap-icons';
import { Link } from 'react-scroll';

function NavbarTop(props) {
  function changeView() {
    props.setNoturnView(!props.noturnView);
  }

  return (
    <Navbar collapseOnSelect expand="lg" className={`font-spline ${props.noturnView ? 'dark-mode-navbar' : 'bg-body-tertiary'}`}>
      <Container>
        <Navbar.Brand>
          <Link to="home" smooth={true} duration={500} spy={true} offset={-70}>
            <span className={props.noturnView ? 'dark-mode-tags-color' : ''}>&lt;</span>
            <span className="title-navbar font-outfit">Carolina Barreiro</span>
            <span className={props.noturnView ? 'dark-mode-tags-color' : ''}>/&gt;</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className={`${props.noturnView ? 'dark-mode-navbar' : ''}`}>
          <Nav className="ms-auto">
          <Nav.Link as={Link} to="projects" smooth={true} duration={50} spy={true} offset={-70}>
              Projects
            </Nav.Link>            
            <Nav.Link as={Link} to="about" smooth={true} duration={50} spy={true} offset={-70}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={50} spy={true} offset={-70}>
              Contact
            </Nav.Link>
            {props.noturnView ? (
              <Nav.Link onClick={changeView} className="sun-icon">
                <Sun />
              </Nav.Link>
            ) : (
              <Nav.Link onClick={changeView} className="moon-icon">
                <Moon />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
