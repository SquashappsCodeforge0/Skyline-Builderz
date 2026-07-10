import React from 'react';
import like from "../../../images/like.svg";
import chat from "../../../images/chat.svg"
import { Col, Container, Row } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import arrow from "../../../images/arrow -button.svg"


function Comments() {
    return (
        <div className='comment-bottom'>
            <Container>
                <Row>
                    <Col lg="9">
                        <p className="construction-main-head construction-details-head">Comments</p>


                        <div className='comment-contents'>

                            <div>   <img src="https://placehold.co/65x65"  alt='' className='command-image' /></div>


                            <div style={{ textAlign: "start", marginLeft: "20px" }}>
                                <p className="construction-main-head-content">Darlene Robertson</p>
                                <p className="blog-card-content">1 Month ago</p>
                                <p className="blog-card-content">Sed sed risus pretium quam vulputate dignissim suspendisse in est. In dictum non consectetur a erat nam at lectus.</p>

                                <div style={{display:"flex"}} >
                                   <p><img src={like} alt='' /> <span>158</span></p> 
                                    <p style={{marginLeft:"30px"}}><img src={chat}  alt="" /> <span>Reply</span></p>
                                </div>



                            </div>


                        </div>
                        <div className='comment-contents'>

                            <div>   <img src="https://placehold.co/65x65" alt='' className='command-image' /></div>

                            <div style={{ textAlign: "start", marginLeft: "20px" }}>
                                <p className="construction-main-head-content">Wade Warren</p>
                                <p className="blog-card-content">1 Month ago</p>
                                <p className="blog-card-content">Sed sed risus pretium quam vulputate dignissim suspendisse in est. In dictum non consectetur a erat nam at lectus.</p>

                          
                                <div style={{display:"flex"}} >
                                   <p><img src={like} alt='' /> <span>158</span></p> 
                                    <p style={{marginLeft:"30px"}}><img src={chat}  alt="" /> <span>Reply</span></p>
                                </div>

                            </div>

                        </div>
                        <div className='comment-margin'>
                            <div className='comment-contents'>

                                <div >   <img src="https://placehold.co/65x65" alt='' className='command-image' /></div>

                                <div style={{ textAlign: "start", marginLeft: "20px" }}>
                                    <p className="construction-main-head-content">Annette Black</p>
                                    <p className="blog-card-content">1 Month ago</p>
                                    <p className="blog-card-content">Sed sed risus pretium quam vulputate dignissim suspendisse in est. In dictum non consectetur a erat nam at lectus.</p>

                               
                                    <div style={{display:"flex"}} >
                                   <p><img src={like} alt='' /> <span>158</span></p> 
                                    <p style={{marginLeft:"30px"}}><img src={chat}  alt="" /> <span>Reply</span></p>
                                </div>

                                </div>

                            </div>
                        </div>

                        <div className='comment-contents'>

                            <div >   <img src="https://placehold.co/65x65" alt='' className='command-image' /></div>

                            <div style={{ textAlign: "start", marginLeft: "20px" }}>
                                <p className="construction-main-head-content">Ralph Edwards</p>
                                <p className="blog-card-content">1 Month ago</p>
                                <p className="blog-card-content">Sed sed risus pretium quam vulputate dignissim suspendisse in est. In dictum non consectetur a erat nam at lectus.</p>

                                <div style={{display:"flex"}} >
                                   <p><img src={like} alt='' /> <span>158</span></p> 
                                    <p style={{marginLeft:"30px"}}><img src={chat}  alt="" /> <span>Reply</span></p>
                                </div>

                            </div>

                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col lg="9">
                        <p className="construction-main-head construction-details-head">Leave a comment</p>

                        <Form>
                            <Row className=" comment-design">
                                <Col>
                                    <Form.Control size="lg" placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Control size="lg" placeholder="Last name" />
                                </Col>
                            </Row>
                            <Row className=" comment-design">
                                <Col>
                                    <Form.Control size="lg" placeholder="Email" />
                                </Col>
                            </Row>
                            <Row className=" comment-design">
                                <Col>
                                    <Form.Control
                                        size="lg"
                                        as="textarea"
                                        placeholder="Message"
                                        rows={6}
                                    />
                                </Col>
                            </Row>
                            <Row> 
                                <Col className=" d-flex justify-content-start ">
                                    <button className='contact-btn-blog grow_spin'> Submit <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                                </Col>
                            </Row>


                        </Form>
                    </Col>
                </Row>


            </Container>


        </div>
    )
}

export default Comments