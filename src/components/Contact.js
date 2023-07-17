import './Contact.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';


export function FormContact() {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button href="#" className="btn-custom font-light">Contact me</Button>
        </>
    );
}

function Contact() {
    return (
        <div id="contact-section"><Container>
            <Row className="justify-content-md-center" id="contactPage">
                <Col className="align-items-center justify-content-center">
                    <h2 className="font-medium">CONTACT ME</h2>
                    <br />
                </Col>
            </Row>
            <Container fluid className="container-fluid no-gutters m-0 custom-container font-light">
                <Row className="row no-border custom-row justify-content-start align-items-center">
                    <Card className="card-contact justify-content-center">
                        <Card.Body>
                            <Row>
                                <Col className="d-flex align-items-left flex-column">
                                    <div className="left-side ">
                                        <Image src="/images/leafy-houseplant-in-vase.png" className="contact-image" />
                                        <h3 style={{margin: 0}}> Let's chat!</h3>
                                    </div>
                                        <h6>Please fill in the form andI'll get back to you as soon as possible.</h6>
                                </Col>
                                <Col>
                                    <br></br>
                                    <FormContact />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            </Container>
            </div>
    );
}

export default Contact;
