import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <>
            <div className="main-sec">
              <div className="content-sec">
                <h1> Hey I'm a </h1>
                <span className="span-dev">Mern- Full Stack Developer</span>
                <p>
                  Passionate Full Stack Developer | Transforming Ideas into
                  Seamless and Visually Stunning Web Solutions.
                </p>
                <div className="all-btn">
                  <button className="resume-btn"> <a href="https://drive.google.com/file/d/1lx0Waz5B1aQl1_3aRyqju8PptqI-24T_/view?usp=sharing" className="hyper" target='blank'>Resume</a></button>
                  <button className="social-icon">
                    <a href="https://www.linkedin.com/in/salman-rana-b90587273/" className="ddd" target='blank'>
                      <i class="bx bxl-linkedin"></i>
                    </a>
                  </button>
                  <button className="social-icon">
                    <a href="https://github.com/salmanr4na" className="ddd" target='blank'>
                      <i class="bx bxl-github"></i>
                    </a>
                  </button>
                  <button className="social-icon">
                    <a href="https://www.instagram.com/" className="ddd" target='blank'>
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </button>
                </div>
              </div>
            <div className="img-sec">
              <div className="image">
                <img src="./assets/img/heroImage.png" alt="" />
              </div>
            </div>
            </div>
    </>
  );
};

export default Home;
