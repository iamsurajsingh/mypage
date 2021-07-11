import React from 'react'
import Separator from '../../Common/Separator/Separator';
import SocialContact from '../../Common/SocialContact/SocialContact';
import "./contact.css";
function Contact() {
    return (
        <div className = "contacts">
            <Separator/>
            <label className = "section-title">Contact</label>
            <div className = "contact-container">
                <div className = "contact-left">
                    <p className = "contact-message">Want to get in touch ? Feel free to contact me through any of these:</p>
                    <SocialContact/>
                </div>
                <div className = "download">
                    <a download href= {require("../../../assets/SURAJ_Software_Engineer.pdf").default}>
                        Download Resume
                        <i class="fi-rr-cloud-download"></i>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Contact
