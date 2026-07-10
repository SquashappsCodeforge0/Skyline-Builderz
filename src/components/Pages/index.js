import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Banner from './Banner/Banner';
import Project from './Project/Project';

function index() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Project/>
        <Footer/>
     
    </div>
  )
}

export default index