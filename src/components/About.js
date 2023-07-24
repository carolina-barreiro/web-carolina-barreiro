import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About(props) {
  return (
    <div
      className={`${props.noturnView ? "dark-mode-background" : ""}`}
      id="about"
    >
      <Container className="fluid">
        <Row className="justify-content-md-center" id="projectsPage">
          <Col className="align-items-center justify-content-center">
            <h2 className="font-outfit">ABOUT</h2>
            <div className="horizontal-line" />
            <br />
            <Row xs={1} md={3} className="justify-content-md-center g-4">
              <Col md={5} id="col1">
                <h4 className="font-outfit">Professional experience</h4>
                <div id="about-line">
                  <h6 className="font-spline-m">Summer Internship</h6>
                  <h6 className="font-spline-m">ItSector</h6>
                </div>
                <div className="font-spline" id="about-line">
                  <p>Braga, Portugal</p>
                  <p>Jul 2023</p>
                </div>
                <p className="font-spline">
                  During my one-month internship I had the opportunity to learn
                  React, participate in career coaching sessions, and job shadow
                  my mentor partipating in the daily meetings.
                </p>
              </Col>
              <Col md={2} className="narrow-column"></Col>
              <Col md={5} id="col2">
                <h4 className="font-outfit">Education</h4>
                <div id="about-line">
                  <h6 className="font-spline-m">
                    Bachelor of Engineering and Management of Information
                    Systems
                  </h6>
                </div>
                <div className="font-spline" id="about-line">
                  <p>University of Minho</p>
                  <p>Oct 2020 - Jun 2023</p>
                </div>
                <p className="font-spline">
                  In my 3 years of university I learned some programming
                  language, from Web Developing to managing data or comprehend
                  business and help them achieve their goals improving their
                  information systems.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
