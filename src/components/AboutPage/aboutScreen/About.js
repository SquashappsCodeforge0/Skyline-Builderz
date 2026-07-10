import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import arrow from "../../../images/arrow -button.svg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="about-page">


        <Container>
          <Row>
            <Col lg="7" md="12" xs="12">
              <div className="about-content-main">
                <div className="about-content">
                  <div className="about-main">
                    <img src={choose} alt="welcome" />{" "}
                    <small className="about-welcome"> About Us </small>
                  </div>
                </div>
                <div>
                  <p className="about-head" style={{ paddingTop: "30px", }}>
                    Making your vision come true at the basics.
                  </p>
                </div>
                <div className="footer-right ">
                  Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                  Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                  auctor a ornare odio. Sed non mauris vitae erat consequat auctor
                  eu in elit. Class aptent taciti sociosquad litora torquent per
                  conubia nostra, per inceptos himenaeos. Mauris in erat justo.
                  Nullam ac urna eu felis dapibus condimentum sit amet a augue.
                </div>

                <div className="about-number">
                  <Row>
                    <Col md="6">
                    <div className="about-li-main">
                    <p className='pb-1 d-flex align-items-center'> <span className="about-li"> 1 </span>{" "}<span className="about-li-content" style={{ marginLeft: "20px" }}>                          100% Satisfaction
                    </span> </p>
                  </div>

                     
                    </Col>
                    <Col md="6">
                    <div className="about-li-main">
                    <p className='pb-1 d-flex align-items-center'> <span className="about-li"> 2 </span>{" "}<span className="about-li-content" style={{ marginLeft: "20px" }}>                       
                    Friendly Support</span> </p>
                  </div>
                  
                    </Col>

                    <Col md="6">
                    <div className="about-li-main">
                    <p className='pb-1 d-flex align-items-center'> <span className="about-li"> 3 </span>{" "}<span className="about-li-content" style={{ marginLeft: "20px" }}>                       
                    Get Combo Offer Exclusively       </span> </p>
                  </div>
                     
                    </Col>

                    <Col md="6">
                    <div className="about-li-main">
                    <p className='pb-1 d-flex align-items-center'> <span className="about-li"> 4 </span>{" "}<span className="about-li-content" style={{ marginLeft: "20px" }}>                       
                    Book Appointment      </span> </p>
                  </div>
                     
                    </Col>
                  </Row>
                  <Link to="/"> <button className='contact-btn-service grow_spin mt-3'> Discover More <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                  </Link>

                </div>
              </div>
            </Col>
            <Col lg="5" md="12" xs="12">
              <img
                src="https://placehold.co/603x650"  
                style={{ width: "100%" }}
                alt=" "
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
