import { Col, Container, Row, Card, Modal } from 'react-bootstrap';
import Filter from "../../../images/filter.svg";
import sortby1 from "../../../images/sortby1.svg";
import sortby2 from "../../../images/sortby2.svg";
import sortby4 from "../../../images/sortby4.svg";
import Downarrow from "../../../images/downarrow.svg"
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function FilterPage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [columns, setColumns] = useState(3);
    const [activeIcon, setActiveIcon] = useState(sortby1);

    

    const handleClose = () => setShowModal(false);
    const handleShow = (blog) => {
        setSelectedBlog(blog);
        setShowModal(true);
    };
   


    const toggleView = (colCount, icon) => {
        setColumns(colCount);
        setActiveIcon(icon);
    };

    const icons = [
        { image: sortby1, columns: 3 },
        { image: sortby2, columns: 2 },
        { image: sortby4, columns: 1 },
       
    ];

    const blogs = [
        {
            img: "https://placehold.co/408x274",
            button: "Building",
            title: "Home Construction In Malibu Beach, USA",
            content: "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.",
            author: "Tracy Wilson",
            date: "August 20, 2022",
            person:"https://placehold.co/65x65",
        },
        {
            img:"https://placehold.co/408x274",
            button: "Construction",
            title: "Systematic project helps to match more impact",
            content: "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.",
            author: "Jenny Wilson",
            person: "https://placehold.co/65x65",
            date: "August 20, 2022"
        },
        {
            img: "https://placehold.co/408x274",
            button: "Design",
            title: "Creating Home Service That Make Difference",
            content: "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.",
            author: "Albert Flores",
            person:"https://placehold.co/65x65",
            date: "August 20, 2022"
        },
        {
            img: "https://placehold.co/408x274",
            button: "Design",

            title: "Start A Construction Business In 2024",
            content: "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.",
            author: "Anette Black",
            person:"https://placehold.co/65x65",
            date: "August 20, 2022"
        },
        {
            img: "https://placehold.co/408x274",
            button: "Construction",

            title: "Systematic Project Helps To Match More Impact",
            content: "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.",
            author: "Floyd Miles",
            person:"https://placehold.co/65x65",

            date: "August 20, 2022"
        },
        {
            img: "https://placehold.co/408x274",
            button: "Design",

            title: "World’s Largest Home Buildings Construction",
            content: "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.",
            author: "Cody Fisher",
            person:"https://placehold.co/65x65",
            date: "August 20, 2022"
        }
    ];

    return (
        <div>
            <div className='filter-page'>
                <Container>
                    <div className='filter-main-div'>

                        <div className='filter-main'>
                            <button className="filter-button grow_spin">
                                <img src={Filter} alt="welcome" />{" "}
                                <small className="about-welcome-blog"> Filter </small>
                            </button>
                        </div>

                        <div>

                            <small className="about-welcome" style={{paddingRight:"15px"}}> Sort by        <img src={Downarrow} alt="welcome" />{" "} </small>
                           
                            {icons.map((icon) => (
                                <img
                                    key={icon.columns}
                                    src={icon.image}
                                    onClick={() => toggleView(icon.columns, icon.image)}
                                    style={{ 
                                        cursor: 'pointer', 
                                        opacity: activeIcon === icon.image ? 1 : 0.5, 
                                        background: activeIcon === icon.image ? '#C10023' : '#474747'
                                    }} 
                                    alt='' 
                                    className='filter-img' 
                                />
                            ))}
                           
                        </div>

                    </div>
                    <div className='construction-blog'>
                        <Row>
                            {blogs.map((blog, index) => (
                                <Col lg={12 / columns} md={6} xs="12" key={index}>
                                    <Card style={{ marginBottom: "30px" }}>
                                        <div className='card-filter'>
                                            <div style={{ textAlign: "justify" }} onClick={() => handleShow(blog)}>
                                                <Card.Img variant="top" src={blog.img} style={{ cursor: 'pointer' }} />
                                            </div>
                                            <div style={{ textAlign: "justify", marginTop: "15px" }}>
                                                <Card.Title>
                                                    <Link to="/blog-details">
                                                        <button className="filter-button-card grow_spin">{blog.button}</button>
                                                    </Link>
                                                </Card.Title>
                                                <div className='card-div-content'>
                                                    <p className="blog-card-main">{blog.title}</p>
                                                    <p className="blog-card-content">{blog.content}</p>
                                                </div>
                                                <div className='blog-detail-section'>
                                                    <div>


                                                        <img src={blog.person} alt='' className='filter-img command-image' />
                                                        <small className='filter-tum-content'>{blog.author}</small>
                                                    </div>

                                                    <p className='filter-para-details'>{blog.date}</p>
                                                </div>


                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <Pagination className='d-flex justify-content-center'>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Container>
            </div>

            {/* Modal for blog details */}
            {selectedBlog && (
                <Modal show={showModal} onHide={handleClose}>

                    <Card.Img className="mx-auto" src={selectedBlog.img} />


                </Modal>
            )}
        </div>
    );
}

export default FilterPage;
