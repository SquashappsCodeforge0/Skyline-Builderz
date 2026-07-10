import React from "react";
import Banner from "./BannerScreen/Banner";
import Header from "../Header";
import Footer from "../Footer";
import Map from "./MapScreen/Map";
import Contact from "./ContactScreen/Contact";

function ContactUs() {
  return (
    <div>
      <Header />
      <Banner />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactUs;
