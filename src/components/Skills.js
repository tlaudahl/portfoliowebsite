import React from 'react'

import '../css/skills.css'

export default function Skills() {
    return (
        <section id='skills'>
            <div className='skillsDiv'>
                <h1>Technologies</h1>
                <div className='skillsContainer'>
                <div className='skill'>React <i className="fab fa-react fa-4x"></i></div>
                    <div className='skill'>JavaScript <i className="fab fa-js-square fa-4x"></i></div>
                    <div className='skill'>LESS <i className="fab fa-less fa-4x"></i></div>
                    <div className='skill'>SASS <i className="fab fa-sass fa-4x"></i></div>
                    <div className='skill'>HTML5 <i className="fab fa-html5 fa-4x"></i></div>
                    <div className='skill'>CSS3 <i className="fab fa-css3-alt fa-4x"></i></div>
                    <div className='skill'>GitHub <i className="fab fa-github-square fa-4x"></i></div>
                    <div className='skill'>GitBash <i className="fab fa-git-alt fa-4x"></i></div>
                </div>
            </div>
        </section>
    )
}
