import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectNav from './ProjectNav';
import data from "../data";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Setup PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = data.portfolio.find((proj) => proj.id === projectId);

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <ProjectNav />
      <section className="portfolio--section">
        <div className="portfolio--container-box">
          <div className="portfolio--container">
            <p className="section--title project--title">Project: {projectId}</p>
            <h2 className="skills--section--heading">{project.title}</h2>
            <div>
              <Document
                file={project.pdf}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
