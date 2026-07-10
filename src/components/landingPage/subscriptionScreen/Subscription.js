import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import Card from "react-bootstrap/Card";
import Tick from "../../../images/blank-tick.svg";
import { Link } from "react-router-dom";

function Subscription() {
  return (
    <div>
      <Container fluid className="blog-section">
        <div className="service-page-subscription-main">
          <div className="service-content-subscription-detail">
            <div className="service-main">
              <img src={choose} alt="welcome" />{" "}
              <small className="about-welcome"> Our Subscriptions </small>
            </div>
          </div>
          <div>
            <p className="service-head-subscription">
              Let’s Customize Work With Affordable Price{" "}
            </p>
          </div>
          <div className="service-right-para ">
            <p>
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt.
            </p>
          </div>
        </div>

        <div>
          <Container>
            <Row>
              <Col lg="4" md="6" xs="12">
                <Card className="subscription-card"  >
                  <div >
                    <div className="sub-div" >
                      <Row>
                        <Col xs={7}>
                          <p className="subscription-head">Basic Plan </p>
                          <p className="subscription-nu">$ 599.00</p>
                        </Col>
                        <Col xs={5}>
                          <p className="subscription-charge">
                            Per Visit Charge
                          </p>
                        </Col>
                      </Row>
                      <div>
                        <hr className="subscription-hr" />
                      </div>

                      <ul className="project-experience">
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li" > Electrical Service</span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li" >  Distribution Power Systems</span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li">    High & Medium Voltages</span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li" >   Industrial Control Systems</span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li">    Switch Installation     </span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li">   Generator Installations     </span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li">    Innovative Construction    </span> </p>

                      </ul>
                    </div>
                    <Link to="/">
                      <button className="contact-btn-subscription grow_spin">
                        Buy Now <small></small>{" "}
                      </button>{" "}
                    </Link>
                  </div>
                </Card>
              </Col>
              <Col lg="4" md="6" xs="12">
                <Card className="subscription-card" >
                  <div >
                    <div className="sub-div">
                      <Row>
                        <Col xs={7}>
                          <p className="subscription-head">Professional </p>
                          <p className="subscription-nu">$ 799.00</p>
                        </Col>
                        <Col xs={5}>

                          <button className="btn-subscription grow_spin">
                            popular <small></small>{" "}
                          </button>{" "}

                          <p className="sub-visit">Per Visit Charge</p>
                        </Col>
                      </Row>
                      <div>
                        <hr className="subscription-hr" />
                      </div>

                      <ul className="project-experience">
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li" >   PLC Controls</span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li" >   Conveyor systems</span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li">      Wiring renovations</span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li" > Electric Water Heater Repair</span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li">   Service And Panel Upgrades   </span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li">    Efficient Lighting Solutions    </span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li">      Site lighting    </span> </p>

                      </ul>
                    </div>
                    <Link to="/">

                      <button className="contact-btn-subscription grow_spin">
                        Buy Now <small></small>{" "}
                      </button>{" "}
                    </Link>
                  </div>
                </Card>
              </Col>
              <Col lg="4" md="6" xs="12">
                <Card className="subscription-card" >
                  <div >
                    <div className="sub-div" >
                      <Row>
                        <Col xs={7}>
                          <p className="subscription-head">Standard</p>
                          <p className="subscription-nu">$ 499.00</p>
                        </Col>
                        <Col xs={5}>
                          <p className="subscription-charge">
                            Per Visit Charge
                          </p>
                        </Col>
                      </Row>
                      <div>
                        <hr className="subscription-hr" />
                      </div>

                      <ul className="project-experience">

                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li" >  Cable Tray Installations</span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li">   Wiring Upgrades</span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li" >  Energy Efficient Lighting</span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li">       Emergency Generating  </span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li">    Pools And Hot Tubs   </span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li">    Air Conditioning Units    </span> </p>
                        <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={Tick} alt='' /><span className="subscription-li" >     Generating Systems</span> </p>

                      </ul>
                    </div>
                    <Link to="/">

                      <button className="contact-btn-subscription grow_spin">
                        Buy Now <small></small>{" "}
                      </button>{" "}
                    </Link>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default Subscription;
