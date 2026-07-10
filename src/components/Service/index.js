import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Banner from './Banner/Banner';
import Service from './Service/Service';


function index() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Service/>
        <Footer/>
    </div>
  )
}

export default index