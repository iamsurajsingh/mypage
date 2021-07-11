import React, { useState } from 'react';
import './header.css';
import Mobile from "./Mobile/Mobile";
import Web from "./Web/Web";


function Header() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="header">
            <div className="logo">
                <a href="#intro">
                    <img src={require("../../assets/infinite.png").default} className = "logo-image" />
                </a>
            </div>

            <div className="menu">
                <div className="web_menu">
                    <Web />
                </div>
                <div className="mobile_menu">
                    <div onClick={() => setOpen(!isOpen)}>
                        <i className="fi-rr-apps menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setOpen={setOpen} />}
                </div>

            </div>

        </div>
    )
}

export default Header
