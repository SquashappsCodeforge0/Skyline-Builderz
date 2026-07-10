import React from 'react';
import page from "../../../images/404.svg"
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      <Container>
        <img src={page} alt='' width="100%" />
        <div className='page-main'>
          <p className='pageNotfound'>Page Not Found</p>
          <p className="service-right-page ">Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum.</p>
       <button className='contact-btn-not-found grow_spin'><Link to="/"> Go To Home</Link> </button>
        </div>
       </Container>
    </div>
  )
}

export default PageNotFound