import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section className='skill-sec'>
        <div className="heading">
            <h1>Skills</h1>
        </div>
        <div className="skill-div">
            <div className="both-skill">
            <div className="card-heading">
                    <h2>Frontend</h2>
                </div>
                <div className="skill-content">
                    <div className="all-skill">
                    <img src="./assets/img/react-icon.png" alt="" />
                    <span>React js</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/redux-icon.png" alt="" />
                    <span>Redux</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/mui-icon.png" alt="" />
                    <span>MUI</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/html-icon.png" alt="" />
                    <span>HTML</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/css-icon.png" alt="" />
                    <span>CSS</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/javascript-icon.png" alt="" />
                    <span>JavaScript</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/bootstrap-icon.png" alt="" />
                    <span>Bootstrap</span>
                    </div>
                </div>
            </div>
            <div className="both-skill">
            <div className="card-heading">
                    <h2>Backend</h2>
                </div>
                <div className="skill-content">
                    <div className="all-skill">
                    <img src="./assets/img/node-icon.png" alt="" />
                    <span>Node js</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/express-icon.png" alt="" />
                    <span>Express Js</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/mongodb-icon.png" alt="" />
                    <span>Mongodb</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/npm-icon.png" alt="" />
                    <span>NPM</span>
                    </div>
                </div>
            </div>
            <div className="both-skill">
                <div className="card-heading">
                    <h2>Others</h2>
                </div>
                <div className="skill-content">
                    <div className="all-skill">
                    <img src="./assets/img/git-icon.png" alt="" />
                    <span>Git</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/github-icon.png" alt="" />
                    <span>GitHub</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/vscode-icon.png" alt="" />
                    <span>VS Code</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/figma-icon.png" alt="" />
                    <span>Figma</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/c-icon.png" alt="" />
                    <span>C</span>
                    </div>
                    <div className="all-skill">
                    <img src="./assets/img/python-icon.png" alt="" />
                    <span>Python</span>
                    </div>
                    <div/>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Skills