import React from "react";
import welcome from "../../../images/welcome-icon.svg";
import tick from "../../../images/tick.svg";
import { Container, Row, Col } from "react-bootstrap";

function Experience() {
  const experiences = [
    {
      year: "2022",
      description:
        "Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium",
    },
    {
      year: "2020",
      description:
        "Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium",
    },
    {
      year: "2015",
      description:
        "Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium",
    },
  ];

  return (
    <div>
      <div className="about-experience">
        <Container >
          <div className="about-experience-content">
            <Row>
              <Col lg="6" md="12" xs="12">
                <div className="info-main">
                  <img src={welcome} alt="welcome" />{" "}
                  <small className="about-welcome"> Experience </small>
                </div>
                <p className="info-head-experience">
                  Let’s Build Something Creative Together{" "}
                </p>
                <p className="footer-right-experience ">
                  Pellentesque vehicula eros neque, maximus mattis est sagittis
                  Nulla facilisi. In sed pretium metus. Proin pretium id urna
                  sit amet tincidunt. Interdum et malesuada.
                </p>
                <div className="project-experience">
                  <li >
                    <img src={tick} alt="" />{" "}
                    <span style={{ color: "white", paddingLeft: "10px",fontSize:"23px",fontWeight:"700", lineHeight:"34px" }}>
                      35 Years Experience
                    </span>
                    <p
                      className="footer-right-experience "
                      style={{ paddingLeft: "47px" }}
                    >
                      Pellentesque vehicula eros neque, maximus mattis est
                      sagittis Nulla facilisi. In sed pretium{" "}
                    </p>
                  </li>
                  <li>
                    {" "}
                    <img src={tick} alt="" />{" "}
                    <span style={{ color: "white", paddingLeft: "10px",fontSize:"23px",fontWeight:"700", lineHeight:"34px" }}>
                      Excellence Certificate
                    </span>
                    <p
                      className="footer-right-experience "
                      style={{ paddingLeft: "47px" }}
                    >
                      Pellentesque vehicula eros neque, maximus mattis est
                      sagittis Nulla facilisi. In sed pretium{" "}
                    </p>
                  </li>
                  <li>
                    {" "}
                    <img src={tick} alt="" />{" "}
                    <span style={{ color: "white", paddingLeft: "10px",fontSize:"23px",fontWeight:"700", lineHeight:"34px" }}>
                      Affordable Price
                    </span>
                    <p
                      className="footer-right-experience"
                      style={{ paddingLeft: "47px" }}
                    >
                      Pellentesque vehicula eros neque, maximus mattis est
                      sagittis Nulla facilisi. In sed pretium{" "}
                    </p>
                  </li>
                </div>
              </Col>
              <Col md="12" lg="6"  xs={12}>
                <div className="timeline">
                  <div className="timeline-line"></div> {/* Vertical line */}
                  {experiences.map((item, index) => (
                     <div className="timeline-item" key={index}>
                     <div className="timeline-arrow"></div> {/* Arrow mark */}
                     <div className="timeline-circle"></div>
                     <div className="timeline-year">{item.year}</div>
                     <div className="timeline-content">
                       {item.description}
                     </div>
                   </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Experience;
