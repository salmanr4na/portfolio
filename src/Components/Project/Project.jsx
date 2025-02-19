import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import './Project.css'

const Project = () => {
  return (
   <>
    <div className="project-heading">
        <h2>Latest Projects</h2>
    </div>
    <div className="project-gallery">
        <ProjectCard pImg="./assets/img/ecommerce-Img.jpg"
        pName="E-Commerce Website"
        pContent="Build an e-commerce website that allow customers to buy and sell products and services over the internet. by using Technologies - ReactJS, Redux, Bootstrap and Material UI."/>

        <ProjectCard pImg="./assets/img/news-Img.png"
        pName="News App"
        pContent="Build a Reactjs based News App project that deliver a seamless user experience for browsing and consuming news articles from various sources. by using Technologies - ReactJS, Redux and Bootstrap."/>

        <ProjectCard pImg="./assets/img/portfolio-Img.jpg"
        pName="Portfolio"
        pContent="Build a fully dynamic personal portfolio website to showcase my skills and experience through a user-friendly interface. by using Technologies - ReactJS, HTML, CSS and JavaScript."/>

        <ProjectCard pImg="./assets/img/crud.jpg"
        pName="CRUD App"
        pContent="Build a fully dynamic CRUD Application to showcase my skills and experience through a user-friendly interface. by using Technologies - NodeJS, ExpressJS and MongoDB."/>
    </div>
   </>
  )
}

export default Project