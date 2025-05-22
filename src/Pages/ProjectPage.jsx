import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectNav from './ProjectNav';
import data from "../data";


const ProjectPage = () => {
  const { projectId } = useParams();
  const project = data.portfolio.find((proj) => proj.id === projectId);


  return (
    <>
      <ProjectNav />
      <section className="portfolio--section">
        <div className="portfolio--container-box">
          <div className="portfolio--container">
            <p className="section--title project--title">Project: {projectId}</p>
            <h2 className="skills--section--heading project--heading">{project.title}</h2>
          <p class='text-md project-container'>{project.description}</p>
            <p className="section--title project--title">Here's a visual from the report:</p>
          <img className="project-visual" src={project.projectimg} />
          <a href={project.pdf} target='_blank'><button className='btn btn-primary'>Link to Full Project</button></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
