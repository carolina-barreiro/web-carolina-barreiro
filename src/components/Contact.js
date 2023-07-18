import './Contact.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import BtnBlackSimple from './BtnBlackSimple';

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

        </>
    );
}

function Contact(props) {
    return (
        <div id="contact-section">
            <Container >
                <Row className="justify-content-md-center" id="contactPage">
                    <Col className="align-items-center justify-content-center">
                        <Row className="align-items-center" >
                            <h2 className="font-outfit" id="contact_h2"> CONTACT</h2>
                        </Row>
                        <br />
                    </Col>
                </Row>
                <Container fluid className="container-fluid no-gutters m-0 custom-container font-light">
                    <Card className={`card-contact justify-content-center custom-container ${props.noturnView ? 'dark-mode-background' : ''}`}>
                        <Row className="justify-content-center">
                            <Col md={10}>
                                <Row className="align-items-center custom-margin">
                                    <h3 className="pr-7 mb-2 mt-4 font-outfit" id="chat">Let's chat!</h3>
                                    <p className="font-spline mb-2">Please fill in the form and I'll get back to you as soon as possible.</p>
                                    <Col lg={5} className="ml-auto">
                                        <Image src="/images/contact_me.png" style={{ width: '130%', height: '100%', marginLeft: '-15%' }} />
                                    </Col>
                                    <Col lg={7} className="mb-5 mb-lg-0">
                                        <form className="pr-2 mb-3 mt-5 font-spline" method="post" id="contactForm" name="contactForm">
                                            <Row className="mb-3">
                                                <Col md={6} className="form-group">
                                                    <input type="text" className="form-control" name="fname" id="fname" placeholder="First name" />
                                                </Col>
                                                <Col md={6} className="form-group">
                                                    <input type="text" className="form-control" name="lname" id="lname" placeholder="Last name" />
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col md={12} className="form-group">
                                                    <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col md={12} className="form-group">
                                                    <textarea
                                                        className="form-control"
                                                        name="message"
                                                        id="message"
                                                        cols="30"
                                                        rows="7"
                                                        placeholder="Write your message"
                                                    ></textarea>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col md={12}>
                                                    <BtnBlackSimple
                                                        txt='Send Message'
                                                        type="submit"
                                                        noturnView={props.noturnView}
                                                    />
                                                    </Col>
                                            </Row>
                                        </form>
                                        <div id="form-message-warning" className="mt-4"></div>
                                        <div id="form-message-success">Your message was sent, thank you!</div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Container>


            </Container>
        </div>
    );
}

export default Contact;

/*
            <Button type="submit"
            value="Send Message"
            className="btn-custom font-light  py-2 px-4">Contact me</Button>
   */