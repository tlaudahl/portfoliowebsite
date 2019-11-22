import React from 'react'
import Fade from 'react-reveal/Fade';
import '../css/header.css'


export default function Header(props) {

    const handleClick = e => {
        const links = {
            linkedin: 'https://www.linkedin.com/in/travis-laudahl/',
            twitter: 'https://twitter.com/LaudahlTravis',
            github: 'https://github.com/tlaudahl'
        }
        window.open(links[e.target.id], '_blank');
    }

    return (
        <header className='header' id='home'>
            <Fade top><h1>Travis Laudahl</h1></Fade>
            <div className='socials'>
                <Fade left big><div className='email'><a href='#contact'><i id='email' title='travis.laudahl@gmail.com' className="fas fa-envelope fa-2x"></i></a><p>travis.laudahl@gmail.com</p></div></Fade>
                <Fade right big><i id='github' title='tlaudahl' className="fab fa-github fa-2x" onClick={handleClick}></i></Fade>
                <Fade right big><i id='linkedin' title='travis-laudahl' className="fab fa-linkedin-in fa-2x" onClick={handleClick}></i></Fade>
                <Fade right big><i id='twitter' title='LaudahlTravis' className="fab fa-twitter fa-2x" onClick={handleClick}></i></Fade>
            </div>
            <Fade bottom><h2>Full Stack Web Developer</h2></Fade>
            <p id='about'>
                Full Stack Web Developer with a background in the automotive field and management. Looking to turn hands-on experience in JavaScript, React, Node.js, and other web technologies into professional experience.
            </p>
        </header>
    )
}
