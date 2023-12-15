import React from "react";
import '../styles/skills.css';

const Skills = () => {
    return (
        <div className="skills-container" id="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="cards">
                <div className="card1">
                    <dl>
                        <dt>Tehnologies</dt>
                        <br />
                        <hr className="horiz-skills" />
                        <br />
                        <dd>Javascript</dd>
                        <dd>TypeScript</dd>
                        <dd>CSS</dd>
                    </dl>
                </div>
                <div className="card2">
                    <dl>
                        <dt>Library and framework</dt>
                        <br />
                        <hr className="horiz-skills" />
                        <br />
                        <dd>React</dd>
                        <dd>Bootstrap</dd>
                        <dd>Sass</dd>
                    </dl>
                </div>
                <div className="card3">
                    <dl>
                        <dt>Tools and others</dt>
                        <br />
                        <hr className="horiz-skills" />
                        <br />
                        <dd>Visual Studio Code</dd>
                        <dd>Package Managers - Npm</dd>
                        <dd>Version Control Systems -Git</dd>
                    </dl>
                </div>
                <div className="card4">
                    <dl>
                        <dt>Design and Prototypes</dt>
                        <br />
                        <hr className="horiz-skills" />
                        <br />
                        <dd>Ui/Ux</dd>
                        <dd>Figma</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Skills;