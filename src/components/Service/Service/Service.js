import React , {useState} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap';
import arrow from "../../../images/arrow -button.svg";
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';


function Service() {

    const details = [
        {
            name: "Heating Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: "https://placehold.co/406x274"  
        },
        {
            name: "Roofing Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: "https://placehold.co/406x274"  
        },
        {
            name: "Flooring Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: "https://placehold.co/406x274"  
        },
        {
            name: "Painting Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: "https://placehold.co/406x274"  
        },
        {
            name: "Plumbing Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img:"https://placehold.co/406x274"  
        },
        {
            name: "Electrical Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: "https://placehold.co/406x274"  
        },
        {
            name: "Carpentry Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: "https://placehold.co/406x274"  
        },
        {
            name: "Renovation Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img:"https://placehold.co/406x274"  
        },
        {
            name: "Washing Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: "https://placehold.co/406x274"  
        },
    ]

    const [showModal, setShowModal] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleClose = () => setShowModal(false);
    const handleShow = (details) => {
        setSelectedBlog(details);
        setShowModal(true);
    };



    return (
        <div>
            <div>
                <Container>
                    <div className='service-card-details'>


                        <Row>

                            {details.map((details) => (

                                <Col lg="4" md="6" xs="12">
                                    <Card style={{ marginBottom: "30px" }}>

                                        <div style={{ textAlign: "justify" }} onClick={() => handleShow(details)}>
                                            <Card.Img variant="top" className='service-details-main' src={details.img} />
                                        </div>
                                        <div className="service-card">
                                            <p ><button className="service-card-team">{details.name}</button>  </p>
                                            <p className="service-card-sub"> {details.content}</p>

                                            <Link to="/service-details" ><button className='contact-btn-service grow_spin'> {details.button} <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                                            </Link>
                                        </div>
                                    </Card>
                                </Col>
                            ))}


                        </Row>
                    </div>

                    {selectedBlog && (
                <Modal show={showModal} onHide={handleClose}>

                        <Card.Img   className="mx-auto"  src={selectedBlog.img} />

                  
                </Modal>
            )}

                </Container>
            </div>
        </div>
    );
}

export default Service;
