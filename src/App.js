

import "./css/custom.scss"; 
import "./App.css";
import "./css/style.css";
import "./css/responsive.css";

import { Routes, Route } from "react-router-dom";
import Landing from "./components/landingPage/index";
import AboutPage from "./components/AboutPage";
import Contact from "./components/ContactUs/index";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail/index";
import Service from "./components/Service/index";
import ServiceDetail from "./components/ServiceDetail/index";
import Pages from "./components/Pages/index";
import ProjectDetail from "./components/ProjectDetails";
import Faq from "./components/FaqPage/index";
import PageNotFound from "./components/404/index";
import ScrollButton from "./components/ScrollButton/Scroll";
import Mouse from "./components/Mouse/Mouse";
import ScrollToTop from "./components/landingPage/ScroolTop/Scrool";


function App() {
  return (
    <div className="App">
      <ScrollButton/>
      <Mouse/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetail />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetail />} />
        <Route path="/project" element={<Pages />} />
        <Route path="/project-details" element={<ProjectDetail />} />
        <Route path="/faq" element={<Faq />} />
        <Route
                    path="*"
                    element={<PageNotFound />}
                />





      </Routes>
    </div>
  );
}

export default App;
