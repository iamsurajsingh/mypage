import React from 'react'
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import './body.css';

function Body() {
    return (
        <div className = "body">
            <section id = "about">
                <About/>
            </section>
            <section id = "projects">
                <Projects/>
            </section>
            <section id = "skills">
                <Skills/>
            </section>
            <section id = "work">
                <Work/>
            </section>
            <section id = "contact">
                <Contact/>
            </section>
        </div>
    )
}

export default Body
