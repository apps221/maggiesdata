import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectNav() {
 
  return (
    <div className='navbar'>
        <img className="logo" src="../img/simplelogo.png" alt="Logo" />
       <Link to='/'><button className="btn btn-outline-primary-nav"
      >Home</button></Link>
    </div>
  );
}

export default ProjectNav;