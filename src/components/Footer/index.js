import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import arrow from "../../images/arrow-go.svg";
import logo from "../../images/footer-logo.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white  ">
        <Container >
          <div className="main-footer" >
            <Row>
              <Col lg={3} md={6} sm={12} xs={12} className="pb-3">
                <div style={{ textAlign: "left", marginTop: "3px" }}>
                  <img className="footer-img-logo" src={logo} alt="logo" />

                </div>

                <p className="footer-para">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit consequuntur magni dolores eos qui ratione.
                </p>
                <div className="footer-image-head">

                  <div className="footer-icon">
                    <Link to="/">
                      <div class="icon-box">
                        <img
                          src={facebook}
                          alt="facebook"

                        />
                      </div>
                    </Link>
                  </div>


                  <div className="footer-icon">
                    <Link to="/">
                      <div class="icon-box">
                        <img
                          src={instagram}
                          alt="instagram"

                        />
                      </div>
                    </Link>
                  </div>



                  <div className="footer-icon">
                    <Link to="/">
                      <div class="icon-box">
                        <img
                          src={twitter}
                          alt="twitter"

                        />
                      </div>
                    </Link>
                  </div>


                  <div className="footer-icon">
                    <Link to="/">
                      <div class="icon-box">
                        <img
                          src={linkedin}
                          alt="linkedin"

                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={2} md={6} sm={6} xs={12} className="pb-3">
                <div className="footer-contact">
                  <h5 className="pb-2  ps-3 footer-content-head">Contact</h5>
                  <p className=" ps-3">(629) 555-0129</p>
                  <p className="ps-3">
                    <Link className="hover-link" to="mailto:info@example.com">info@example.com</Link>
                  </p>
                  <p className=" ps-3">6391 Elgin St, Celina, 10299</p>
                </div>
              </Col>

              <Col lg={2} md={3} sm={6} xs={12} className="pb-3">
                <div className="footer-contact ">
                  <h5 className="pb-2 ps-3 footer-content-head">Page</h5>
                  <ul >
                    <li>
                      <p> <Link className="hover-link" to="/about">About Us</Link> </p>
                    </li>
                    <li>
                      <p> <Link className="hover-link" to="/contact">Contact Us</Link> </p>
                    </li>
                    <li>
                      <p> <Link className="hover-link" to="/blog">Blogs</Link> </p>
                    </li>
                    <li>
                      <p> <Link className="hover-link" to="/service">Service</Link></p>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
                <div className="footer-contact ">
                  <h5 className="pb-2  ps-3 footer-content-head">Quick Links</h5>
                  <ul >
                    <li>
                      <p><Link className="hover-link" to="/#"> Terms and Conditions </Link></p>
                    </li>
                    <li>
                      <p> <Link className="hover-link" to="/#">Privacy Policy</Link></p>
                    </li>
                    <li>
                      <p>  <Link className="hover-link" to="/faq">FAQs </Link> </p>
                    </li>
                    <li>
                      <p> <Link className="hover-link" to="/#">Support Center</Link> </p>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={5} sm={6} xs={12} className="pb-3">
                <div className="footer-contact ">
                  <h5 className="pb-2  ps-3  footer-content-head">Subscribe</h5>

                  <Form className="form-product   ps-3 ">
                    <InputGroup>

                      <Form.Control
                        type="text"
                        size="lg"
                        placeholder="Get product"
                        aria-label="Search"
                      />
                      <InputGroup.Text className="button-spin-hover " style={{ backgroundColor: "#FFCC29" }}>
                        <Link to="#">     <img src={arrow} alt='' />

                        </Link>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="footer-content-hr">
                  <hr className="footer-hr" />
                </div>
              </Col>
            </Row>
            <Row>
              <div className="text-center py-3">
                © 2024 Copyright. All rights reserved.
              </div>
            </Row>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
