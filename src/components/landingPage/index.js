import React from "react";

import Home from "../landingPage/homeScreen/index";
import About from "../landingPage/aboutScreen/index";
import Header from "../Header/index"
import Footer from "../Footer/index";
import ChooseScreen from "./chooseScreen";
import ServiceScreen from "./serviceScreen";
import BlockScreen from "./blogScreen";
import TeamScreen from "./teamScreen";
import SubscriptionScreen from "../landingPage/subscriptionScreen/index";
import TestimonialScreen from "./testimonialScreen";
import ScrollButton from "../ScrollButton/Scroll";
import MouseFollower from "../Mouse/Mouse";


function Landing() {
  return (
    <div >
      <div className="banner-background">
      <Header />
      <Home />
      </div>     
      <About />
      <ChooseScreen />
      <ServiceScreen />
      <BlockScreen />
      <TeamScreen />
      <SubscriptionScreen />
      <TestimonialScreen />
      <ScrollButton/>
      <MouseFollower/>

      <Footer />
    </div>
  );
}

export default Landing;
