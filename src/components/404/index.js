import React from 'react'
import Header from '../Header';
import Footer from "../Footer";
import Banner from './Banner/Banner';
import PageNotFound from "./404Page/404Page"

function index() {
  return (
    <div>
        <Header/>
        <Banner/>
        <PageNotFound/>
        <Footer/>

    </div>
  )
}

export default index