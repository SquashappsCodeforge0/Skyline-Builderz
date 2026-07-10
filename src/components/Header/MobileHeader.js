import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import logo from "../../images/logo.svg";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container } from "react-bootstrap";

function MobileHeader(...props) {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [dropdowns, setDropdowns] = useState({
        services: false,
        blog: false,
        pages: false,
    });

    const handleClose = () => {
        setShow(false);
        setIsOpen(false);
        setDropdowns({ services: false, blog: false, pages: false }); // Close all dropdowns
    };

    const handleDropDown = (menu) => {
        setDropdowns(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    const toggleNavbar = () => {
        setShow(!show);
        setIsOpen(!isOpen);
    };

    return (
  
        <div className="mobile-header">
                  <Container>
            <div className="mobile-between">
                <div className="logo">
                    <img className="logo-img" src={logo} width="100%" alt="logo" />
                    <small className="logo-text">Skyline Builderz</small>
                </div>
                <div className="nav-icon" onClick={toggleNavbar}>
                    {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>

            <Offcanvas placement="end" show={show} {...props}>
                <Offcanvas.Header style={{ justifyContent: "end" }}>
                    <div onClick={handleClose}>
                        <FaTimes size={30} />
                    </div>
                </Offcanvas.Header>
                {isOpen && (
                    <nav className="mobile-nav">
                        <div className="mobilebar-div">
                            <Link to="/" onClick={handleClose}>Home</Link>
                        </div>
                        <div className="mobilebar-div">
                            <Link to="/about" onClick={handleClose}>About</Link>
                        </div>

                        {/* Services Dropdown */}
                        <div onClick={() => handleDropDown('services')} className="mobilebar-div" style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" ,alignItems:"center" }}>
                        <Link to="#" >Services</Link>
                            {dropdowns.services ? <FaMinus fill="white" /> : <FaPlus fill="white" />}
                        </div>
                        {dropdowns.services && (
                            <div className="drop-menu">
                                <div className="mobilebar-div">
                                    <Link to="/service" style={{paddingLeft:"10px"}} onClick={handleClose}>Services</Link>
                                </div>
                                <div className="mobilebar-div">
                                    <Link to="/service-details" style={{paddingLeft:"10px"}} onClick={handleClose}>Service Detail</Link>
                                </div>
                            </div>
                        )}

                        {/* Blog Dropdown */}
                        <div onClick={() => handleDropDown('blog')} className="mobilebar-div" style={{ cursor: "pointer", display: "flex", justifyContent: "space-between",alignItems:"center" }}>
                        <Link to="#" >Blogs</Link>
                            {dropdowns.blog ? <FaMinus fill="white" /> : <FaPlus fill="white" />}
                        </div>
                        {dropdowns.blog && (
                            <div>
                                <div className="mobilebar-div">
                                    <Link to="/blog" style={{paddingLeft:"10px"}} onClick={handleClose}>Blogs</Link>
                                </div>
                                <div className="mobilebar-div">
                                    <Link to="/blog-details" style={{paddingLeft:"10px"}} onClick={handleClose}>Blog Detail</Link>
                                </div>
                            </div>
                        )}

                        {/* Pages Dropdown */}
                        <div onClick={() => handleDropDown('pages')} className="mobilebar-div" style={{ cursor: "pointer", display: "flex", justifyContent: "space-between",alignItems:"center" }}>
                        <Link to="#" >Pages</Link>
                            {dropdowns.pages ? <FaMinus fill="white" /> : <FaPlus fill="white" />}
                        </div>
                        {dropdowns.pages && (
                            <div className="drop-menu">
                                <div className="mobilebar-div">
                                    <Link to="/project" style={{paddingLeft:"10px"}} onClick={handleClose}>Projects</Link>
                                </div>
                                <div className="mobilebar-div">
                                    <Link to="/project-details" style={{paddingLeft:"10px"}} onClick={handleClose}>Project Detail</Link>
                                </div>
                            </div>
                        )}

                        <div >
                            <Link to="/contact" onClick={handleClose}>
                                <button  style={{margin:"20px"}} className="grow_spin contact-btn">Contact Us</button>
                            </Link>
                        </div>
                    </nav>
                )}
            </Offcanvas>
            </Container>
        </div>
   
    );
}

export default MobileHeader;
