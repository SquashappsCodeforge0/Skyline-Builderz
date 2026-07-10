import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Detail() {
    return (
        <div>
            <Container>
                <div className='project-main-details'>

            
                <Row>
                    <Col lg="8" className='project-image-detail'>
                       
                    </Col>

                    <Col lg="4">
                    <div className='project-background-clr'>

                        <p className='project-main'>Project Information</p> 
                        <hr className='project-hr' />
                        <div className='project-content-text'>
                            <p  className='project-main-content'>Client : </p>
                            <p className="blog-card-content-sub"> Choose a Plan Work </p>
                            <hr className='project-hr' />

                        </div>

                        <div className='project-content-text'>
                            <p className='project-main-content'>Location : </p>
                            <p className="blog-card-content-sub"> New York United States </p>
                            <hr className='project-hr' />

                        </div>  

                        <div className='project-content-text'>
                            <p  className='project-main-content'>Project Date : </p>
                            <p className="blog-card-content-sub">15 December,2022 </p>
                            <hr className='project-hr' />

                        </div>  

                        
                        <div className='project-content-text'>
                            <p  className='project-main-content'>Category :</p>
                            <p className="blog-card-content-sub">Service </p>
                            <hr className='project-hr' />

                        </div>  
                             
                        <div className='project-content-text'>
                            <p  className='project-main-content'>Value :</p>
                            <p className="blog-card-content-sub">$ 2 250 000 </p>
                            <hr className='project-hr' />

                        </div>  
                     </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    )
}

export default Detail