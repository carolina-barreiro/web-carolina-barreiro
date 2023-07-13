import './Footer.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Linkedin, Github, EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

function Footer() {
    return (
        <Container
            display="flex"
            justifyContent="between"
            alignItems="center"
            className="mx-auto py-4 flex-wrap"
            style={{ width: '80%' }}
        >
            <Row>
                <Col className="d-flex justify-content-start align-items-center">
                    <span className="ms-4 h5 mb-0 font-weight-bold">Carolina Barreiro</span>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <small className="ms-2">&copy; Carolina Barreiro, 2023. All rights reserved.</small>
                </Col>
                <Col className="d-flex justify-content-end">
                    <div className='card-footer'>
                        <Button className="p-2 socialContainer">
                            <Linkedin className="iconSocial" />
                        </Button>
                        <Button className="p-2 socialContainer">
                            <Github className="iconSocial" />
                        </Button>
                        <Button className="p-2 socialContainer">
                            <EnvelopeFill className="iconSocial" />
                        </Button>
                        <Button className="p-2 socialContainer">
                            <TelephoneFill className="iconSocial" />
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;