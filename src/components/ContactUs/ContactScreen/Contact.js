import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import phone from "../../../images/Phone.svg";
import email from "../../../images/Email.svg";
import location from "../../../images/Location.svg";
import Form from "react-bootstrap/Form";
import arrow from "../../../images/arrow -button.svg";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-details-main" >
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <div>
              <p className="about-head">Get In Touch</p>
            </div>
            <div className="footer-right ">
              <p>
                is a phrase used to encourage communication, often between
                individuals or businesses, to connect or resolve issues.
              </p>
            </div>
            <div className="about-main">
              <p className='pb-1 d-flex align-items-center'><img className="contact-image" style={{ height: "fit-content" }} src={phone} alt='' /><span className="about-li-content" >    Call us: +(406) 555-0120{" "}</span> </p>
              <p className='pb-1 d-flex align-items-center'><img className="contact-image" style={{ height: "fit-content" }} src={email} alt='' /><span className="about-li-content" >      Email: support@example.com{" "}</span> </p>
              <p className='pb-1 d-flex align-items-center'><img className="contact-image" style={{ height: "fit-content" }} src={location} alt='' /><span className="about-li-content" >    2972 Westheimer Rd. Santa Ana, Illinois, USA{" "}</span> </p>

            </div>
          </Col>
          <Col lg="6" md="6" sm="12">
          <div className="contact-message">

        
            <p className="form-control-contact">Send a message</p>
            <Form>
              <Row className="mb-4">
                <Col >
                  <Form.Control size="lg" placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control size="lg" placeholder="Last name" />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Control size="lg" placeholder="Email" />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Control
                    siz e="lg"
                    as="textarea"
                    placeholder="Message"
                    rows={6}
                  />
                </Col>
              </Row>
              <Row className="mb-4" style={{ textAlign: "left" }}>
                <Link to="/"> <button className='contact-btn-service grow_spin mt-3'> About More <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                </Link>
              </Row>
            </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
