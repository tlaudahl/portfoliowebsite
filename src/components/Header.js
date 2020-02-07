import React from 'react';
import ReactGA from 'react-ga';

import '../css/header.css';

export default function Header(props) {

    const handleClick = e => {
        const links = {
            linkedin: 'https://www.linkedin.com/in/travis-laudahl/',
            twitter: 'https://twitter.com/LaudahlTravis',
            github: 'https://github.com/tlaudahl'
        }
        window.open(links[e.target.id], '_blank');
    }

    const analytics = (category, action) => {
        ReactGA.event({
            category: category,
            action: action 
        })
    }

    return (
        <header className='header' id='home'>
            <h1>Travis Laudahl</h1>
            <h2>Full Stack Web Developer</h2>
            <div className='socials'>
                <div className='email'><a href='#contact'><i id='email' title='travis.laudahl@gmail.com' className="fas fa-envelope fa-2x"></i></a></div>
                <i id='github' title='tlaudahl' className="fab fa-github fa-2x" onClick={(e) => {
                    analytics('Socials', 'Clicked to view my Github')
                    handleClick(e)
                }}></i>
                <i id='linkedin' title='travis-laudahl' className="fab fa-linkedin-in fa-2x" onClick={(e) => {
                    analytics('Socials', 'Clicked to view my Linkedin');
                    handleClick(e);
                }}></i>
                <i id='twitter' title='LaudahlTravis' className="fab fa-twitter fa-2x" onClick={(e) => {
                    analytics('Socials', 'Clicked to view my Twitter')
                    handleClick(e)
                }}></i>
            </div>
            <p id='about'>
            Full Stack Web Developer primarily building with JavaScript, React, React Native, Node.js, and Redux right now. I have a background in management in the automotive field and currently work as an aircraft deicer on the weekends while finishing up my studies full-time in <a href='https://lambdaschool.com/' target='_blank' rel="noopener noreferrer">Lambda School</a>. I've had the opportunity to study in their accelerated <a href='https://learn.lambdaschool.com/course/cs-fsw' target='_blank' rel="noopener noreferrer">Full Stack Web Development program</a> since August 2019. Having always loved computers and wanting to eventually transition into software development, Lambda School's accessible and challenging program was the right opportunity to launch this transition. As someone who is a natural at tinkering and problem solving, I look forward to contributing my skills to a team, building products and tools people love.
            </p>
        </header>
    )
}
