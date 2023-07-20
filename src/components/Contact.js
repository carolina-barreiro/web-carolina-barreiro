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
import FormContact from '../API';


/*
export function FormContact(props) {
    return (
        <form className="pr-2 mb-3 mt-5 font-spline" id="contactForm" name="contactForm" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="e687b782-0101-4f5a-9a1e-da188bf02d22" />
            <input type="hidden" name="subject" value="New Submission from Web3Forms" />
            <input type="checkbox" name="botcheck" id="" style={{display: "none"}} />
            <Row className="mb-3">
                <Col md={6} className="form-group">
                    <input type="text" required className="form-control" name="fname" id="fname" placeholder="First name" />
                    <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                Please provide your first name.
              </div>
                </Col>
                <Col md={6} className="form-group">
                    <input type="text" required className="form-control" name="lname" id="lname" placeholder="Last name" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={12} className="form-group">
                    <input type="text" required className="form-control" name="email" id="email" placeholder="Email" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={12} required className="form-group">
                    <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                        placeholder="Write your message"
                    ></textarea>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={12} >
                    <BtnBlackSimple
                        id="btn-send-message"
                        txt='Send Message'
                        type="submit"
                        noturnView={props.noturnView}
                    />
                </Col>
            </Row>
        </form>
    );
}*/

function Contact(props) {
    return (
        <div id="contact">
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
                                            <Image src="/images/contact_me.png" className="contact-image" />
                                        </Col>
                                        <Col lg={7} className="mb-5 mb-lg-0">
                                            <FormContact
                                                noturnView={props.noturnView} />
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
        </div>
    );
}

export default Contact;

/*
            <Button type="submit"
            value="Send Message"
            className="btn-custom font-light  py-2 px-4">Contact me</Button>
   */