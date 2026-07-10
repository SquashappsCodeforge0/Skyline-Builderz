// src/components/Main.js
import React from "react";
import banner from "../../../images/setting.svg";
import arrow from "../../../images/arrow.svg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
<Container>


    <div className="banner">
      <p className="banner-img">     <img src={banner} alt="text"/> <span className="banner-img-text">We Provide Electric Services For Industrial Project</span></p>
 
      <p className="banner-head">Build your Dream home</p>
      <p className="banner-sub ">
        Cras ac sapien eget ante faucibus tempus et eu tortor. Integer iaculis
        ultrices velit nec tempor. Pellentesque aliquet est massa, sit amet
        tempor mi auctor nec. Mauris a nibh sed libero fermentum aliquet.
        Quisque sit amet faucibus magna. Donec purus mi, commodo id commodo
        vel, imperdiet ut mauris. Ut ultricies arcu risus,
      </p>
      <Link to="/" >
      <button className="contact-btn-banner grow_spin">
        Get Started{" "}
        <small className="arrow-container">
          <img src={arrow} alt="arrow" className="arrow" />
        </small>
      </button>

      </Link>

    </div>
    </Container>

  );
};

export default Banner;
