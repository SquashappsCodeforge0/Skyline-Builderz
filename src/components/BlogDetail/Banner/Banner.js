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
          <p className="banner-content">Home Construction In Malibu Beach, USA</p>
          <div className="banner-text">
          <Link
                to="/"><span className="footer-image-banner"> Home </span></Link>
             <FaHome/> <span style={{ color: "#FFCC29" }}>Blog Details</span>{" "}
          </div>
        </div>
        </Container>
      </div>
    </div>
  );
}

export default Banner;
