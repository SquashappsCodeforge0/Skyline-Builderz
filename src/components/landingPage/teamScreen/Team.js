import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import Card from "react-bootstrap/Card";

function Team() {
  return (
    <div>
      <div>
        <Container>
          <div className="team-page">
           
          <div className="service-page-details">
          <div className="service-content-details">
            <div className="service-main-details">
                <img src={choose} alt="welcome" />{" "}
                <small className="about-welcome"> Our Team </small>
              </div>
            </div>
            <div>
            <p className="service-head-details">Meet Our Team</p>
            </div>
            <div className="service-right-details">
              <p>
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
                amet tincidunt.
              </p>
            </div>
          </div>
          <div>
            <Row>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top"  src="https://placehold.co/384x383"  />
                    </div>

                    <p className="service-head-main-team"> David James </p>
                    <p className="footer-right-service-team"> Engineer </p>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top"  src="https://placehold.co/384x383"   />
                    </div>

                    <p className="service-head-main-team">Hinata Hyuga </p>
                    <p className="footer-right-service-team">Engineer</p>
                  </div>
                </Card>
              </Col>

              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top"  src="https://placehold.co/384x383"   />
                    </div>

                    <p className="service-head-main-team">Sarrah Albert </p>
                    <p className="footer-right-service-team ">Engineer</p>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Team;
