import React, { useState } from 'react';
import './components/Contact.css';
import './components/BtnBlackSimple.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FormContact(props) {
    const [result, setResult] = React.useState("");
    const [fnameError, setfNameError] = useState("");
    const [lnameError, setlNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);

        // Validate the form fields
        if (!formData.get("fname")) {
            setfNameError("Please provide your first name.");
            return;
        } else {
            setfNameError("");
        }

        if (!formData.get("lname")) {
            setlNameError("Please provide your last name.");
            return;
        } else {
            setlNameError("");
        }

        if (!formData.get("email")) {
            setEmailError("Please provide your email.");
            return;
        } else {
            setEmailError("");
        }

        if (!formData.get("message")) {
            setMessageError("Please write your message.");
            return;
        } else {
            setMessageError("");
        }

        formData.append("access_key", "e687b782-0101-4f5a-9a1e-da188bf02d22");

        setResult("Sending....");
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };


    return (
        <>
            <div className="App">
                <form className="pr-2 mb-3 mt-5 font-spline" onSubmit={onSubmit} noValidate>
                    <Row className="mb-3">
                        <Col md={6} className="form-group">
                            <input type="text" required  className={`form-control ${fnameError ? "error" : ""}`} name="fname" id="fname" placeholder="Name" />
                            {fnameError && <div className="error-message">{fnameError}</div>}
                        </Col>
                        <Col md={6} className="form-group">
                    <input type="text" required className="form-control" name="lname" id="lname" placeholder="Last name" />
                    {lnameError && <div className="error-message">{lnameError}</div>}
                </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={12} className="form-group">
                            <input type="email" required className={`form-control ${emailError ? "error" : ""}`} name="email" id="email" placeholder="Email" />
                            {emailError && <div className="error-message">{emailError}</div>}
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={12} className="form-group">
                            <textarea
                                className={`form-control ${messageError ? "error" : ""}`}
                                required
                                name="message"
                                id="message"
                                cols="30"
                                rows="5"
                                placeholder="Write your message"
                            ></textarea>
                            {messageError && <div className="error-message">{messageError}</div>}
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={12} >
                            <input className={`btn-custom font-spline ${props.noturnView ? 'dark-mode-background' : ''}`} type="submit" value="Send Message" />
                        </Col>
                    </Row>
                </form>
                <span className="font-spline">{result}</span>
            </div>
        </>
    );
}


/*
 <form className="pr-2 mb-3 mt-5 font-spline" id="contactForm" name="contactForm" onSubmit={onSubmit}>
            <Row className="mb-3">
                <Col md={6} className="form-group">
                    <input type="text" required className="form-control" name="fname" id="fname" placeholder="First name" />
                    <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
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
        <span>{result}</span>
*/