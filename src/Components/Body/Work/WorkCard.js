import React from 'react';
import "./workCard.css";

function WorkCard({ works }) {
    return (
        <div className="workCard">
            <img src={works.companyLogo} alt="" className="work-logo" />
            <div className="work-info">
                <label className="company_name">
                    {works.company}
                </label>
                <label className = "work-designation">
                    <i>{works.designation}</i>
                </label>
                <div className="work-tenure">
                    <label>{works.joinedDate}</label> - <label>{works.endDate}</label>
                </div>
                <div className="work-desc">
                    {works.description}
                </div>
            </div>
        </div>
    );
}

export default WorkCard;
