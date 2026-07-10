

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card, Row, Col } from 'react-bootstrap';
import star from "../../../images/Star.svg";
import qoutes from "../../../images/quotes.svg";
import choose from "../../../images/choose.svg";
import Container from "react-bootstrap/Container";

const testimonials = [
  {
    name: "Cody Fisher",
    role: "Marketing Coordinator",
    content: "Blandit volutpat maeceganas volutpat blandit. Morbi tincidunt ornare massa eget edhbgestas purus viverra. Auctor augue mauris inra augue neque gravida in fermentum et.",
    imgSrc:"https://placehold.co/182x210"  
  },
  {
    name: "Cody Fisher",
    role: "Marketing Coordinator",
    content: "Blandit volutpat maeceganas volutpat blandit. Morbi tincidunt ornare massa eget edhbgestas purus viverra. Auctor augue mauris inra augue neque gravida in fermentum et.",
    imgSrc: "https://placehold.co/182x210"  
  },
  {
    name: "Cody Fisher",
    role: "Marketing Coordinator",
    content: "Blandit volutpat maeceganas volutpat blandit. Morbi tincidunt ornare massa eget edhbgestas purus viverra. Auctor augue mauris inra augue neque gravida in fermentum et.",
    imgSrc: "https://placehold.co/182x210"  
  },
];

const TestimonialsCarousel = () => {

  return (
    <div>
      <Container fluid>

        <div className="testimonial">


          <div className="service-page-details">
            <div className="service-content-details">
              <div className="service-main-details">
                <img src={choose} alt="welcome" />{" "}
                <small className="about-welcome"> Testimonial </small>
              </div>
            </div>
            <div>
              <p className="service-head-details">What Our Customer Say ?</p>
            </div>
            <div className="service-right-details">
              <p>
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
                amet tincidunt.
              </p>
            </div>
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            center
            margin={10}

            autoplay
            autoplayTimeout={5000}
            smartSpeed={450}
            animateOut="fadeOut"
            animateIn="fadeIn"
            responsive={{
              0: { items: 1 },
              605: { items: 2 },
              749: { items: 2 },
              768: { items: 1 },
              780: { items: 1 },
              800: { items: 1 },
              900: { items: 1.5 },
              991:{items:1.5},
              975: { items: 1.5 },
              995: { items: 1.5 },
              1048: { items: 1.5 },
              1170: { items: 2 },
              1196: { items: 2 },
              1440: { items: 3 }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="item" key={index}>
                <Card className="testimonial-card-details" style={{ marginBottom: "30px" }}>
                  <Row>
                    <Col md="5">

                      <Card.Img variant="left" style={{ width: "100%", objectFit: "cover" }} src={testimonial.imgSrc} />
                    </Col>
                    <Col md="7">
                      <div className="testimonial-main">
                        <Row>
                          <Col md="7" xs="8">
                            <p className="testimonial-head">{testimonial.name}</p>
                            <p className="testimonial-sub">{testimonial.role}</p>

                            <div style={{ display: "flex" }}>
                              {[...Array(5)].map((_, i) => (
                                <small key={i}>
                                  <img src={star} alt="" width="100%" />
                                </small>
                              ))}
                            </div>
                          </Col>
                          <Col md="5" xs="4">
                            <div>
                              <img src={qoutes} className="quotes" alt="" />
                            </div>
                          </Col>
                        </Row>


                        <div>
                          <p className="testimonial-content">{testimonial.content}</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </Container>
    </div >
  );
};

export default TestimonialsCarousel;
