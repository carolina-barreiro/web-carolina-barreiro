import './Footer.css';
import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { Moon, Sun } from 'react-bootstrap-icons';

import { Linkedin, Github, EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';
function Footer(props) {
    const [showEmail, setShowEmail] = useState(false);
    const targetEmail = useRef(null);

    const [showPhone, setShowPhone] = useState(false);
    const targetPhone = useRef(null);

    function changeView() {
        props.setNoturnView(!props.noturnView);
      }

    return (
        <div className={`${props.noturnView ? 'dark-mode-background' : ''}`}>
            <Container
                fluid
                className="mx-auto py-4"
                style={{ width: '80%' }}
            >
                <Row className="align-items-center">
                    <Col xs={12} md={4} className="text-md-start mb-3 mb-md-0">
                        <span className="h5 mb-0 font-outfit" style={{ marginRight: '3rem' }}>Carolina Barreiro</span>   {props.noturnView ? <a onClick={changeView} className="sun-icon"><Sun /></a> : <a onClick={changeView} className="moon-icon"><Moon /></a>}
          
                    </Col>
                    <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                        {/* Add any content for the center column */}
                    </Col>
                    <Col xs={12} md={4} className="text-md-end">
                        <div className='card-footer'>
                            <Button className="p-2 socialContainer" href="https://linkedin.com/in/carolina-barreiro-12ba7720a" target="_blank">
                                <Linkedin className="iconSocial" />
                            </Button>
                            <Button className="p-2 socialContainer" href="https://github.com/carolina-barreiro" target="_blank">
                                <Github className="iconSocial" />
                            </Button>
                            <Button className="p-2 socialContainer" ref={targetEmail} onClick={() => setShowEmail(!showEmail)}>
                                <EnvelopeFill className="iconSocial" />
                            </Button>
                            <Overlay target={targetEmail.current} show={showEmail} placement="top">
                                {(props) => (
                                    <Tooltip id="overlay-email" {...props}>
                                        carolinabarreiro2504@gmail.com
                                    </Tooltip>
                                )}
                            </Overlay>
                            <Button className="p-2 socialContainer" ref={targetPhone} onClick={() => setShowPhone(!showPhone)} >
                                <TelephoneFill className="iconSocial" />
                            </Button>
                            <Overlay target={targetPhone.current} show={showPhone} placement="top">
                                {(props) => (
                                    <Tooltip id="overlay-phone" {...props}>
                                        (+351) 961 627 510
                                    </Tooltip>
                                )}
                            </Overlay>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;