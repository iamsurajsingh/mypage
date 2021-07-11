import React from 'react';
import './Mobile.css';

function Mobile({ isOpen, setOpen }) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setOpen(!isOpen)}>
                <i class="fi-rr-cross-circle"></i>
            </div>

            <div className="mobile-options">
                <ul class>
                    <div className="mobile_option">
                        <li onClick={() => setOpen(false)} className = "menu-option-list">
                            <a href="#projects">
                                <i class="fi-rr-edit-alt option-icon"></i> Projects
                            </a>
                        </li>
                    </div>

                    <div className="mobile_option">
                        <li onClick={() => setOpen(false)} className = "menu-option-list">
                            <a href="#skills">
                                <i class="fi-rr-graduation-cap option-icon"></i> Skills
                            </a>
                        </li>
                    </div>

                    <div className="mobile_option">
                        <li onClick={() => setOpen(false)} className = "menu-option-list">
                            <a href="#work">
                                <i class="fi-rr-briefcase option-icon"></i> Work
                            </a>
                        </li>
                    </div>

                    <div className="mobile_option">
                        <li onClick={() => setOpen(false)} className = "menu-option-list">
                            <a href="#contact">
                                <i class="fi-rr-user option-icon"></i> Contact
                            </a>
                        </li>
                    </div>
                </ul>

            </div>
        </div>
    )
}

export default Mobile
