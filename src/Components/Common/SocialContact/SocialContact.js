import React from 'react';
import './socialContact.css';
import { SocialData } from '../../Data/social';

function SocialContact() {
    const data = SocialData;
    return (
        <div className="socialContact">
            {data.map((item) => {
                return (
                    <a href={item.link} target="_blank">
                        <div className="social-icons-div">
                            <img src={item.icon} alt={item.handle} className = "social-icons" />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact
