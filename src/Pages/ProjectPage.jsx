import React from 'react'
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
     const projectId = useParams().id;
  return (
    <>
    <div>Home</div>
    <div>{projectId}</div>
    </>
  )
}

export default ProjectPage