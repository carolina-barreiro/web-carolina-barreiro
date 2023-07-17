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

function ModalContact(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    How to contact me
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
                <button id="btn-linkedin" href="https://linkedin.com/in/carolina-barreiro-12ba7720a" target="_blank">
                    <span class="icon"><svg fill="none" height="33" viewBox="0 0 120 120" width="33" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m120 60.0002c0 33.1366-26.8633 59.9998-60 59.9998-33.138 0-60-26.8632-60-59.9998 0-33.1376 26.8617-60.0002 60-60.0002 33.1364.00031715 60 26.8626 60 60.0002z" fill="#2867b2"></path><g fill="#fff"><path d="m63.8771 54.3451c.2959-.3181.411-.4154.4938-.5356 4.0325-5.884 9.7919-7.6141 16.5119-6.5811 7.7657 1.1953 12.7354 6.6312 14.004 14.949.3009 1.9723.4506 3.9525.449 5.9464-.0047 8.2817-.0177 16.563.0178 24.844.0054.9327-.2242 1.2067-1.1801 1.195-4.3386-.052-8.6787-.0514-13.0179 0-.9493.0104-1.1925-.2601-1.1874-1.1944.0352-7.7238.0228-15.4472.0152-23.1703-.0029-1.7554-.1234-3.4997-.6169-5.1996-1.5816-5.4524-7.7846-7.3664-12.2018-3.7408-2.3866 1.9581-3.3196 4.5473-3.3015 7.5947.0386 7.2858.0114 14.5713.0114 21.8571 0 .9558-.0533 1.9146.0162 2.8647.0608.8259-.2766.9848-1.0248.98-4.4194-.0298-8.8379-.033-13.2567.0019-.8017.0063-1.09-.1567-1.0808-1.038.0647-6.5672.091-13.1375.0939-19.7052.0012-8.0822-.0149-16.1637-.0714-24.2455-.006-.8848.1792-1.1465 1.0932-1.1363 4.4194.0495 8.8383.0422 13.2571.0051.7957-.0073 1.0177.2321.9923 1.0063-.0549 1.6656-.0165 3.3335-.0165 5.3026z"></path><path d="m40.1241 71.1028c0 7.2826-.0155 14.5659.0187 21.8491.0038.9045-.1785 1.2264-1.1645 1.2134-4.377-.0584-8.7549-.0447-13.1324-.0079-.8129.0066-1.0869-.1963-1.086-1.0507.0213-14.6861.0178-29.3712-.0041-44.0569-.0009-.765.1856-1.0209.9882-1.0133 4.4579.038 8.9154.0428 13.3722-.0032.8896-.0098 1.0279.3149 1.0244 1.1008-.027 7.3235-.0152 14.6458-.0165 21.9687z"></path><path d="m32.5678 25.8388c5.8726.0064 9.6878 4.6579 8.2959 10.1135-1.0517 4.1194-5.3122 6.491-10.2299 5.6924-5.2234-.8477-8.1348-5.9452-6.21-10.8714 1.2013-3.0767 4.2757-4.9392 8.144-4.9345z"></path></g></g></svg></span>
                    <span class="text1"></span>
                    <span class="text2"></span>
                </button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function HeroSection() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container fluid="md">
            <Row className="justify-content-md-center" id="landingPage">
                <Col className="align-items-center justify-content-center" id="column1">
                    <div className="content-wrapper">
                        <h4 className="font-outfit">HELLO!</h4>
                        <h1 className="font-outfit">I'm Carolina Barreiro</h1>
                        <p className="font-spline">I'm an dedicated and active Masters student in Engineering and Management of Information Systems at the University of Minho, based in Braga, Portugal. I'm open to new opportunities and I'm eager to grow professionally. Browse my portfolio to discover my skills and projects.</p>
                        <Button href="#" className="btn-custom font-spline" onClick={() => setModalShow(true)}>Contact me</Button> {' '} <Button href={CV_Carolina_Barreiro_en} download="CV_Carolina_Barreiro_en"
                            target="_blank" rel="noreferrer" className="btn-custom font-spline" >Get my CV</Button>
                        <ModalContact
                            show={modalShow}
                            onHide={() => setModalShow(false)}
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
    );

}

export default HeroSection;