import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
        <div className="about-container" name="about" >
            <div className="about-img">
                <img src="./assets/img/aboutImg.png" alt=""/>
            </div>
            <div className="about-content">
                <h1 className='about-heading'>About <span>Me</span></h1>
                <h3>Mern- Full Stack Developer</h3>
                <p>Hi, I'm Salman Rana, Pursuing BCA with a focus on web development. I'm passionate about creating user-friendly and visually appealing websites. Throughout my studies, I've gained a strong foundation in full stack development, which I've utilized to build several personal projects, including a responsive portfolio website. I'm excited to contribute my skills to a collaborative team environment where I can constantly learn and grow.</p>
            </div>
        </div>
    </>
  )
}

export default About