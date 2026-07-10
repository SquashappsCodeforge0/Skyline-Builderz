import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div>
      <div className="background-banner">
        <Container>

      
        <div className="banner-details">
          <p className="banner-content">404</p>
          <div className="banner-text">
          <Link
                to="/"><span className="footer-image-banner"> Home </span></Link>
            &bull; <span style={{ color: "#FFCC29" }}>404 Error</span>{" "}
          </div>
        </div>
        </Container>
      </div>
    </div>
  );
}

export default Banner;
