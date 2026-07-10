import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import star from "../../../images/Star.svg";
import qoutes from "../../../images/quotes.svg";
import ellipsis1 from "../../../images/ellipise1.svg";
import ellipsis2 from "../../../images/ellipise2.svg";

import ellipsis3 from "../../../images/ellipise3.svg";

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

function Testimonial() {
  return (
    <div>
      <div className="testimonial-about">
        <Container>
          <div className="service-page">
            <div className="service-content">
              <div className="service-main">
                <img src={choose} alt="welcome" />{" "}
                <small className="about-welcome"> Testimonial </small>
              </div>
            </div>
            <div>
              <p className="service-head">What Our Customer Say?</p>
            </div>
            <div className="service-right">
              <p>
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
                amet tincidunt.
              </p>
            </div>
          </div>
          <div>
            <Row className="testimonial-row align-items-center">
              <Col md="1" className="text-center">
                <FaChevronLeft style={{ fontSize: '2rem', color: '#000' }} />
              </Col>
              <Col md="10">
                <Row>
                  <Col md="3">
                    <div className="testimonial-main">
                      <Row>
                        <Col md="7">
                          <p className="testimonial-head">Cody Fisher</p>
                          <p className="testimonial-sub">Marketing Coordinator</p>
                        </Col>
                        <Col>
                          <div>
                            <img src={qoutes} style={{ width: "47%" }} alt="" />
                          </div>
                        </Col>
                      </Row>

                      <div>
                        {[...Array(5)].map((_, index) => (
                          <small key={index}>
                            <img src={star} alt="" />
                          </small>
                        ))}
                      </div>
                      <div>
                        <p className="testimonial-content">
                          Blandit volutpat maeceganas volutpat blandit. Morbi
                          tincidunt ornare massa eget edhbgestas purus viverra.
                          Auctor augue mauris inra augue neque gravida in
                          fermentum et.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="9">
                    <Row className="align-items-center">
                      <Col md="5" className="text-center">
                        <img src={ellipsis1} alt="Ellipse"  style={{width:"100%"}}/>
                       
                      </Col>
                      <Col md="7" className="d-flex justify-content-center">
                        <div className="text-center">
                          <img src={ellipsis2} alt="Ellipse"  />
                         
                        </div>
               
                        <div className="text-center">
                          <img src={ellipsis3} alt="Ellipse"/>
                         
                        </div>
                      
                    
                      </Col>
                      
           
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md="1" className="text-center">
                <FaChevronRight style={{ fontSize: '2rem', color: '#000' }} />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Testimonial;
