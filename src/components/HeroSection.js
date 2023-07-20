import './HeroSection.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import BtnBlackSimple from './SmallComponents';
import { Link } from 'react-scroll';
import ImageHero from "../images/vector-person-computer.png";


function HeroSection(props) {

    return (
        <div className={`${props.noturnView ? 'dark-mode-background' : ''}`}>
            <Container fluid="md">
                <Row className="justify-content-md-center" id="landingPage">
                    <Col className="align-items-center justify-content-center order-md-last" md={6} id="column2">
                        <div className="image-container">
                            <Image src={ImageHero} className="hero-image" />

                        </div></Col>
                    <Col className="align-items-center justify-content-center order-md-first" md={6} id="column1">
                        <div className={`content-wrapper ${props.noturnView ? 'dark-mode-background' : ''}`}>
                            <h4 className="font-outfit">HELLO!</h4>
                            <h1 className="font-outfit">I'm Carolina Barreiro</h1>
                            <p className="font-spline">I'm an active and dedicated Masters student in Engineering and Management of Information Systems at the University of Minho, based in Braga, Portugal. I'm open to new opportunities and eager to grow professionally. Browse my portfolio to discover my skills and projects.</p>
                            <div className="btn-container">
                                <Link to="contact">
                                    <BtnBlackSimple txt='Contact me' noturnView={props.noturnView} />
                                </Link>
                                <BtnBlackSimple txt='Get my CV' link='cv' noturnView={props.noturnView} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );

}

export default HeroSection;