import './HeroSection.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import CV_Carolina_Barreiro_en from '../assets/CV_Carolina_Barreiro_en.pdf';

export function BtnBlackSimple(props) {

    return (
        <Button className={`btn-custom font-spline ${props.noturnView ? 'dark-mode-background' : ''}`} href={props.link === 'cv' ? CV_Carolina_Barreiro_en : '#'}
            download={props.link === 'cv' ? 'CV_Carolina_Barreiro_en' : ''}>{props.txt}</Button>
    );
}


function HeroSection(props) {

    return (
        <div className={`${props.noturnView ? 'dark-mode-background' : ''}`}>
        <Container fluid="md">
            <Row className="justify-content-md-center" id="landingPage">
                <Col className="align-items-center justify-content-center" id="column1">
                    <div className={`content-wrapper ${props.noturnView ? 'dark-mode-background' : ''}`}>
                        <h4 className="font-outfit" >HELLO!</h4>
                        <h1 className="font-outfit">I'm Carolina Barreiro</h1>
                        <p className="font-spline">I'm an dedicated and active Masters student in Engineering and Management of Information Systems at the University of Minho, based in Braga, Portugal. I'm open to new opportunities and I'm eager to grow professionally. Browse my portfolio to discover my skills and projects.</p>
                        <BtnBlackSimple
                            txt='Contact me'
                            noturnView={props.noturnView}
                        />
                        <BtnBlackSimple
                            txt='Get my CV'
                            link='cv'
                            noturnView={props.noturnView}
                        />
                    </div>
                </Col>
                <Col className="align-items-center justify-content-center" id="column2">
                    <Image src="/images/vector-person-computer.png" className="hero-image" />
                </Col>
                <div className="svg-shape">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="#EA9B3A"
                            d="M26.7,-38.9C35.5,-30.4,44.2,-23.8,52.8,-13.3C61.4,-2.9,70.1,11.3,69.7,25.8C69.3,40.2,59.9,54.8,46.8,64.6C33.6,74.3,16.8,79.2,-1.3,81C-19.5,82.9,-39,81.7,-45.1,69.7C-51.3,57.7,-44,34.8,-47.5,17.1C-50.9,-0.6,-65.2,-13.2,-65.6,-24.2C-66,-35.2,-52.7,-44.7,-39.5,-51.8C-26.2,-58.9,-13.1,-63.6,-2.1,-60.8C9,-57.9,17.9,-47.4,26.7,-38.9Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                </div>
            </Row>
        </Container>
        </div>
    );

}

export default HeroSection;