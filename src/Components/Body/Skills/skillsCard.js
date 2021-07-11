import React from 'react';
import "./SkillsCard.css";

function skillsCard({ tech }) {
    return (
        <div className="skillsCard">
            <div className="skill-icons">{tech.icon}</div>
            <label className="skill-name">{tech.name}</label>
        </div>
    );
}

export default skillsCard;
