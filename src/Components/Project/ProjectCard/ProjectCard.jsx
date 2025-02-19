import React from 'react'
import './ProjectCard.css'

function ProjectCard({pImg, pName, pContent}) {
  return (
    <div className="port-box">
    <div className="port-img">
        <img src={pImg} alt="Project Image" />
    </div>
    <div className="port-content">
        <h3>{pName}</h3>
        <p>{pContent}</p>
        <a href=""><i class='bx bx-link-external'></i></a>
    </div>
</div>
  )
}

export default ProjectCard