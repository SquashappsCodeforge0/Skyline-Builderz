import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa'; 


function Banner() {
  return (
    <div>
      <div className="background-banner">
        <Container>

      
        <div className="banner-details">
          <p className="banner-content">FAQ</p>
          <div className="banner-text">
          <Link
                to="/"><span className="footer-image-banner"> Home </span></Link>  <FaHome/> <span style={{ color: "#FFCC29" }}>FAQ</span>{" "}
          </div>
        </div>
        </Container>-0434
      </div>
    </div>
  );
}

export default Banner;
