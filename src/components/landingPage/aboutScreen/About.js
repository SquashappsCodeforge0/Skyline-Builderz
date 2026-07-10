import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import welcome from "../../../images/welcome-icon.svg";

function About() {
  return (
    <div>
      <div className="about-screen">
        <Container>
          <Row>
            <Col lg="5" md="12" xs="12">
              <img src="https://placehold.co/600x672" className="about-image" width="100%" alt="construction" />
            </Col>
            <Col lg="7" md="12" xs="12">
            <div className="future-provider">

           
              <div className="service-page">
                <div className="service-content">
                  <div className="service-main-provider">
                    <img src={welcome} alt="welcome" />{" "}
                    <small className="about-welcome"> Welcome To </small>
                  </div>
                </div>
                <div>
                  <p className="service-head">We Provide Your Future</p>
                </div>
                <div className="service-right ">
                <p className="banner-sub-about">
                    Pellentesque vehicula eros neque, maximus mattis est sagittis
                    Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
                    amet tincidunt.
                  </p>
                 
                  <p className="banner-sub-about ">In pulvinar viverra diam, nec rutrum mauris maximus non. Aenean sed quam tristique, facilisis est ac, interdum velit.</p>

                </div>
              </div>
              <div className="experience-years">
              <div>
                <Row >
              
                
                  <Col lg="4" md="4">
                    <div className="banner-experience ">
                      <p className="number-banner">35</p>
                      <p className="banner-experience-text">
                        Years Of Experience
                      </p>
                    </div>
                  </Col>
                  <Col lg="8" md="8">
                    <div className="banner-left">
                      <p>- Sed varius ipsum lacus</p>
                      <p>- Pulvinar tortor dignissim sit amet.</p>

                      <p>- Quisque tristique diam quis placerat</p>

                      <p>- Aliquam id ante suscipi fringilla.</p>
                    </div>
                  </Col>
                  
                </Row>
                </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
