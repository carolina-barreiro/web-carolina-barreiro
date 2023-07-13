import './HeroSection.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function HeroSection() {
    return (
        <Container fluid="md">
            <Row className="justify-content-md-center" id="landingPage">
                <Col className="align-items-center justify-content-center" id="column1">
                <div className="content-wrapper">
                    <h2>Hello!</h2>
                    <h1>I'm Carolina Barreiro</h1>
                    <p>I'm an dedicated and active Masters student in Engineering and Management of Information Systems at the University of Minho, based in Braga, Portugal. I'm open to new opportunities and I'm eager to grow professionally. Browse my portfolio to discover my skills and projects.</p>
                    <br/>
                    <Button href="#" className="btn-custom" >Contact me</Button>       {' '} <Button href="#" className="btn-custom" >Get my CV</Button>
                </div>
                </Col>
                <Col className="align-items-center justify-content-center" id="column2">
                <Image src="/images/vector-person-computer.png" className="hero-image"/>
                </Col>
            </Row>
        </Container>
    );

}

export default HeroSection;