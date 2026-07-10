import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Banner from './Banner/Banner';
import Project from '../ProjectDetails/Project/Detail';
import Description from './Description/Description';
import ProjectCard from './ProjectCard/ProjectCard';

function index() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Project/>
        <Description/>
        <ProjectCard/>
        <Footer/>
    </div>
  )
}

export default index