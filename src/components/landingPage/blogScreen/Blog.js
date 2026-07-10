import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import Card from "react-bootstrap/Card";
import person from "../../../images/person.svg";
import clock from "../../../images/clock.svg";
import { Link } from "react-router-dom";




function Blog() {
  return (
    <div>
      <div className="our-blog">


        <Container fluid className="blog-section">
          <div className="service-page-subscription">
            <div className="service-content-subscription">
              <div className="service-main">
                <img src={choose} alt="welcome" />{" "}
                <small className="about-welcome"> Our Blog </small>
              </div>
            </div>
            <div>
              <p className="service-head-details">Latest News and Articles </p>
            </div>
            <div className="service-right-details">
              <p className="service-para">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
                amet tincidunt.
              </p>
            </div>
          </div>

          <div>
            <Container>
              <Row>
                <Col md="6" lg="4" xs="12">
                  <Card className="card-rotate" style={{ marginBottom: "30px" }}>
                    <div className="service-main-card-blog">
                      <div style={{ textAlign: "justify" }}>
                        <Card.Img variant="top"  src="https://placehold.co/400x247" />
                        <div>
                          <div className="blog-details">

                            <div className="blog-det">
                              <img src={person} alt="" />
                              <small className="ps-1"> John Kennis</small>
                            </div>

                            <div className="blog-clock">
                              <img src={clock} alt="" />{" "}
                              <small className="ps-1"> April 2, 2022</small>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div className="blog-content-details">
                        <p className="head-main-service">
                        World’s Largest Home Buildings Construction                        </p>
                        <p className="footer-right-service-blog pb-1">
                          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada.
                        </p>
                        <Link to="/">
                          <button className="contact-btn-banner grow_spin ">
                            Read More <small></small>{" "}
                          </button>{" "}
                        </Link>
                      </div>

                    </div>

                  </Card>
                </Col>
                <Col md="6" lg="4" xs="12">
                  <Card className="card-rotate" style={{ marginBottom: "30px" }}>
                    <div className="service-main-card-blog">
                      <div style={{ textAlign: "justify" }}>
                        <Card.Img variant="top" src="https://placehold.co/400x247" />
                        <div>

                          <div className="blog-details">

                            <div className="blog-det">
                              <img src={person} alt="" />
                              <small className="ps-1">John Dean</small>
                            </div>

                            <div className="blog-clock">
                              <img src={clock} alt="" />{" "}
                              <small className="ps-1">April 3, 2022</small>
                            </div>

                          </div>

                        </div>
                      </div>
                      <div className="blog-content-details">
                        <p className="head-main-service">
                          Home Construction In Malibu Beach, USA                      </p>
                        <p className="footer-right-service-blog pb-1">
                          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada.
                        </p>
                        <Link to="/">

                          <button className="contact-btn-banner grow_spin">
                            Read More <small></small>{" "}
                          </button>{" "}
                        </Link>
                      </div>

                    </div>
                  </Card>
                </Col>

                <Col md="6" lg="4" xs="12">
                  <Card className="card-rotate" style={{ marginBottom: "30px" }}>
                    <div className="service-main-card-blog">
                      <div style={{ textAlign: "justify" }}>
                        <Card.Img variant="top"  src="https://placehold.co/400x247"  />
                        <div>

                          <div className="blog-details">

                            <div className="blog-det">
                              <img src={person} alt="" />
                              <small className="ps-1">John Wick</small>
                            </div>

                            <div className="blog-clock">
                              <img src={clock} alt="" />{" "}
                              <small className="ps-1">April 4, 2022</small>
                            </div>

                          </div>


                        </div>
                      </div>
                      <div className="blog-content-details">
                        <p className="head-main-service">
                          {" "}
                          Systematic project helps to match more impact                      </p>
                        <p className="footer-right-service-blog pb-1 ">
                          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada.
                        </p>
                        <Link to="/">

                          <button className="contact-btn-banner grow_spin">
                            Read More <small></small>{" "}
                          </button>{" "}
                        </Link>
                      </div>

                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Blog;
