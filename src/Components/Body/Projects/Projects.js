import React from 'react'
import { projectsData } from '../../Data/projects'
import ProjectCard from './ProjectCard';
import Separator from '../../Common/Separator/Separator';
import './Projects.css';

function Projects() {
    const data = projectsData;
    return (
        <div className = "projects">
            <Separator/>
            <label className = "section-title">Projects</label>
            
            <div>
                {data.map((project) => {
                    return (
                        <ProjectCard project = {project}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
