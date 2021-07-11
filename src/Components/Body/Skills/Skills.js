import React from 'react'
import "./skills.css"
import Separator from '../../Common/Separator/Separator';
import SkillsCard from './skillsCard';
import { SkillsData } from '../../Data/skills';

function Skills() {
    const data = SkillsData;
    return (
        <div className="skills">
            <Separator />
            <label className="section-title">
                Skills
            </label>
            <div className="skills-container">
                {data.map((item) => {
                    return (
                        <>
                            <div className="skills-section">
                                <label className="skills-section-title">{item.type}</label>
                                <div className="skills-section-icons">
                                    {item.list.map((tech) => {
                                        return (
                                            <SkillsCard tech={tech} />
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills
