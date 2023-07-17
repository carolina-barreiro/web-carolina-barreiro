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
            <div class="container">

            <Card className="card-contact justify-content-center">
                        <Card.Body>
      <div class="row justify-content-center">
        <div class="col-md-10">
          
          <div class="row align-items-center">
            <div class="col-lg-7 mb-5 mb-lg-0">

              <h2 class="mb-5">Fill the form. <br/> It's easy.</h2>

              <form class="border-right pr-5 mb-5" method="post" id="contactForm" name="contactForm">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" class="form-control" name="fname" id="fname" placeholder="First name"/>
                  </div>
                  <div class="col-md-6 form-group">
                    <input type="text" class="form-control" name="lname" id="lname" placeholder="Last name"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" name="email" id="email" placeholder="Email"/>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12 form-group">
                    <textarea class="form-control" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4"/>
                    <span class="submitting"></span>
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4"></div> 
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>

            </div>
            <div class="col-lg-4 ml-auto">
              <h3 class="mb-4">Let's talk about everything.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil deleniti itaque similique magni. Magni, laboriosam perferendis maxime!</p>
              <p><a href="#">Read more</a></p>
            </div>
          </div>
        </div>  
        </div>
        </Card.Body>
                    </Card>
      </div>
            </Container>
            </div>
    );
}

export default Contact;
