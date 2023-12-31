import "./Projects.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { projectsData } from "../projects_data.js";
import { Github } from "react-bootstrap-icons";

export function BtnGithub(props) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Go to github repository
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="left"
      delay={{ show: 200, hide: 200 }}
      overlay={renderTooltip}
    >
      <a
        href={props.giturl}
        target="_blank"
        rel="noopener noreferrer"
        className="github-icon btn-github"
      >
        <Github className="align-top" />
      </a>
    </OverlayTrigger>
  );
}

function Projects(props) {
  return (
    <div
      className={`${props.noturnView ? "dark-mode-background" : ""}`}
      id="projectsnpm "
    >
      <Container fluid="md" className="font-medium">
        <Row className="justify-content-md-center" id="projectsPage">
          <Col className="align-items-center justify-content-center">
            <h2 className="font-outfit">PROJECTS</h2>
            <div className="horizontal-line" />

            <br />
          </Col>
        </Row>
        <Row xs={1} md={2} className="justify-content-md-center g-4">
          {projectsData.map((project, idx) => (
            <Col key={idx}>
              <Card className={`${props.noturnView ? "dark-mode-card" : ""}`}>
                <div className="card-image-overlay">
                  <Card.Img
                    variant="top"
                    className="image-card"
                    src={project.srcImage}
                  />
                </div>
                <Card.Body>
                  <div id="card-line">
                    <Card.Title className="font-outfit">
                      {project.title}
                    </Card.Title>
                    <BtnGithub giturl={project.urlGit} />
                  </div>
                  <Card.Text className="font-spline">
                    {project.description}
                  </Card.Text>
                  <div id="card-line2">
                    <Card.Text className="font-spline">
                      {project.technologies.map((technology, techIdx) => (
                        <span key={techIdx}>
                          <b>
                            {technology.tech}
                            {techIdx !== project.technologies.length - 1 &&
                              " - "}
                          </b>
                        </span>
                      ))}
                    </Card.Text>
                    <Button
                      href={project.urlWeb}
                      target="_blank"
                      className={`cta font-spline ${
                        props.noturnView ? "dark-mode-card" : ""
                      }`}
                    >
                      {" "}
                      <span>Launch</span>
                      <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
