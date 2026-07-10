import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Banner from './Banner/Banner';
import Faq from "./Faq/Faq"

function index() {
  return (
    <div>
        <Header/>
        <Banner />
        <Faq/>
        <Footer/>
    </div>
  )
}

export default index