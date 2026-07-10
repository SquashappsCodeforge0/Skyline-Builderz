import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import tick from "../../../images/tick.svg";

function Choose() {
  return (
    <div>
      <Container fluid>

        <Row>
          <Col  lg="6"md="12" xs="12" className="project-image ">
            <div className="project-content">
              <div className="stats">
                <div className="stat-item">

                  <span className="stat-number">3956</span>
                  <span className="stat-label">Project Done</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">851</span>
                  <span className="stat-label">People Working</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">265</span>
                  <span className="stat-label">Business Partner</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">854+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" md="12" xs="12" className="info-section" >
          <Container>
            <div className="choose-detail">
            <div className="service-page">
          <div className="service-content">
            <div className="service-main">
            <img src={choose} alt="welcome" />{" "}
            <small className="about-welcome"> Why Choose Us </small>
            </div>
          </div>
          <div>
            <p className="service-head">Few Reasons Why You Should Choose Us</p>
          </div>
          <div className="service-right ">
          <p className="banner-sub-about ">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt.
            </p>
          </div>
        </div>
            
              <div className="project-experience">
                <ul>
                  <li>
                    <img src={tick} alt="" /> <small className="project-li">35 Years Experience</small> 
                    <p
                      className="banner-sub-about "
                      style={{ paddingLeft: "46px" }}
                    >
                      Pellentesque vehicula eros neque, maximus mattis est
                      sagittis Nulla facilisi. In sed pretium{" "}
                    </p>
                  </li>
                  <li>
                    {" "}
                    <img src={tick} alt="" /> <small className="project-li">Excellence Certificate</small> 
                    
                       <p className="banner-sub-about "
                      style={{ paddingLeft: "46px" }}
                    >
                      Pellentesque vehicula eros neque, maximus mattis est
                      sagittis Nulla facilisi. In sed pretium{" "}
                    </p>
                  </li>
                  <li>
                    {" "}
                    <img src={tick} alt="" /> <small className="project-li"> Affordable Price</small>
                    <p
                      className="banner-sub-about "
                      style={{ paddingLeft: "46px" }}
                    >
                      Pellentesque vehicula eros neque, maximus mattis est
                      sagittis Nulla facilisi. In sed pretium{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Choose;
