import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectNav from './ProjectNav';
import data from "../data";
import { Document, Page, pdfjs } from 'react-pdf';


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
           <iframe id="inlineFrameExample" 
    title="Inline Frame Example" 
    width="300" 
    height="200" 
    src={project.pdf}> 
</iframe> 
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
