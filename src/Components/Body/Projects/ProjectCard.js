import React from 'react';
import './projectCard.css';

function ProjectCard({ project }) {
    return (
        <div className="projectCard">
            <div className="projectCard-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo_link &&
                        <a className="project-link" href={project.demo_link} target="_blank">
                            <div className="demo-link">
                                <img src = {require("../../../assets/globe.png").default} alt = "open page" className = "demo-link-img"/> 
                            </div>
                        </a>
                    }

                    {project.github &&
                    <a className = "project-github-link" href = {project.github} target = "_blank">
                        <div className = "github-link">
                            <img src = {require("../../../assets/github_project.png").default} alt = "github" className = "git-link-img"/> 
                        </div>
                    </a>
                    }
                </div>

                <p className = "project-about">{project.about}</p>

                <div className = "project-tags">
                    {project.tags.map((tag)=> {
                        return (
                            <label className = "tech-tags">{tag}</label>
                        )
                    })}
                </div>
            </div>

            <div className="projectCard-image">
                <img src={project.image} alt="" className="project-image" />
            </div>
        </div>
    )
}

export default ProjectCard;
