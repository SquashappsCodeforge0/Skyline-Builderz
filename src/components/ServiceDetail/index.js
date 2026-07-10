import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Banner from './Banner/Banner';
import Detail from './ServiceDetail/Detail';

function index() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Detail/>
        <Footer/>
    </div>
  )
}

export default index