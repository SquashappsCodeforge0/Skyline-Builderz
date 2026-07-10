import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Banner from './Banner/Banner';
import Filter from './Filter/Filter';

function Blog() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Filter/>
        <Footer/>
    </div>
  )
}

export default Blog