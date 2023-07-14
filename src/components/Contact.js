import './Contact.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <Container fluid="md">
            <Row className="justify-content-md-center" id="projectsPage">
                <Col className="align-items-center justify-content-center">
                    <h2 className="font-medium">CONTACT ME</h2>
                    <br />
                </Col>
            </Row>
            <Row xs={1} md={2} className="justify-content-md-center g-4">
                
            </Row>
        </Container>
    );
}

export default Contact;
