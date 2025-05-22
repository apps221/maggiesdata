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
            <h2 className="skills--section--heading">{project.title}</h2>
          <p class='text-md project-container'>{project.description}</p>
            <p className="section--title project--title">Here's a visual from the report:</p>
          <img src={project.projectimg} />
           <button className='btn btn-primary'><a className='text-white' href={project.pdf}>Link to Full Project</a></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
