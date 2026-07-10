import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaPlus, FaMinus } from "react-icons/fa";

function Faq() {
    const [expandedIndex, setExpandedIndex] = useState(null); 

    const according = [
        {
            heading: "What is Agency?",
            content: "Improve efficiency, provide a better customer experience with modern technology services available around."
        },
        {
            heading: "Nulla vitae est risus. Aenean aliquam dolor a massa?",
            content: "Improve efficiency, provide a better customer experience with modern technology services available around."
        },
        {
            heading: "Pellentesque habitant morbi tristique senectus?",
            content: "Improve efficiency, provide a better customer experience with modern technology services available around."
        },
        {
            heading: "Habitant morbi tristique senectus?",
            content: "Improve efficiency, provide a better customer experience with modern technology services available around."
        },
        {
            heading: "What should be listed on a business card?",
            content: "Improve efficiency, provide a better customer experience with modern technology services available around."
        },
        {
            heading: "Why we are the best company?",
            content: "Improve efficiency, provide a better customer experience with modern technology services available around."
        },
        {
            heading: "How the template process works?",
            content: "Improve efficiency, provide a better customer experience with modern technology services available around."
        },
        {
            heading: "Company mission & vision?",
            content: "Improve efficiency, provide a better customer experience with modern technology services available around."
        },
    ];

    const toggleContent = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); 
    };

    return (
        <div>
            <div className='faq-div'>
                <Container>
                    <div>
                        <p className="about-head">Frequently Asked Questions</p>
                        <br />
                    </div>
                    <Row>
                        <Col lg="6">
                            <img src="https://placehold.co/658x1031"  alt='' width="85%" />
                        </Col>
                        <Col lg="6">
                            <div className='according-main'>
                                {according.map((item, index) => (
                                    <div className="according-div" key={index}>
                                        <div
                                            style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                            onClick={() => toggleContent(index)}
                                        >
                                            <span className='according-heading'>{item.heading}</span>
                                            <div style={{ paddingLeft: "10px" }}>
                                                {expandedIndex === index ? <FaMinus size={20} fill="#C10023" /> : <FaPlus size={20} fill="#C10023" />}
                                            </div>
                                        </div>
                                        <div className={`according-content ${expandedIndex === index ? 'expanded' : ''}`}>
                                            {item.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Faq;
