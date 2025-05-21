import React from 'react'
import { useParams } from 'react-router-dom';
import ProjectNav from './ProjectNav';
import data from "../data";

const ProjectPage = () => {
     const {projectId} = useParams();
     const project = data.portfolio.find((proj) => proj.id === projectId);

  return (
    <>
    <ProjectNav />
   <section class="portfolio--section">
  <div class="portfolio--container-box">
    <div class="portfolio--container">
      <p class="section--title project--title">Project: {projectId}</p>
      <h2 class="skills--section--heading">{project.title}</h2>
       <div>
    <iframe src={project.pdf} width='100%' height='100%' />
 </div>
    </div>
  </div>
</section>
</>
  )
}

export default ProjectPage