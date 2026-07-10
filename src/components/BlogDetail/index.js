import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Banner from "./Banner/Banner"
import Blog from "./BlogDetail/Details";
import Comments from './Comments/Comments';

function BlogDetail() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Blog/>
        <Comments/>
        <Footer/>
    </div>
  )
}

export default BlogDetail