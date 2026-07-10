import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "./bannerScreen/Banner";
import About from "./aboutScreen/About";
import Experience from "./experienceScreen/Experience";
import Service from "../landingPage/serviceScreen/Service";
import Testimonial from "../landingPage/testimonialScreen/index"

function AboutPage() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Experience />
      <Service />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default AboutPage;
