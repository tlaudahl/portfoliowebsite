import React, { useState } from 'react'
import ReactGA from 'react-ga';
import Fade from 'react-reveal/Fade';
import '../css/header.css'


export default function Header(props) {
    const [hidden, setHidden] = useState(true)

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
            <Fade top><h1>Travis Laudahl</h1></Fade>
            <div className='socials'>
                <Fade left big><div className='email'><a href='#contact'><i id='email' title='travis.laudahl@gmail.com' className="fas fa-envelope fa-2x"></i></a></div></Fade>
                <Fade right big><i id='github' title='tlaudahl' className="fab fa-github fa-2x" onClick={(e) => {
                    analytics('Socials', 'Clicked to view my Github')
                    handleClick(e)
                }}></i></Fade>
                <Fade right big><i id='linkedin' title='travis-laudahl' className="fab fa-linkedin-in fa-2x" onClick={(e) => {
                    analytics('Socials', 'Clicked to view my Linkedin');
                    handleClick(e);
                }}></i></Fade>
                <Fade right big><i id='twitter' title='LaudahlTravis' className="fab fa-twitter fa-2x" onClick={(e) => {
                    analytics('Socials', 'Clicked to view my Twitter')
                    handleClick(e)
                }}></i></Fade>
            </div>
            <Fade bottom><h2>Full Stack Web Developer</h2></Fade>
            <p id='about'>
                Full Stack Web Developer with a background in the automotive field and management. From my first job as a tire tech to my current job as a aircraft deicer I've worked in teams as a member and a leader. Hands-on experience in JavaScript, React, Node.js, Redux, and <a href='#skills'>other web technologies</a>. {hidden && <span className='moreLess' onClick={() => { 
                    setHidden(!hidden)
                    analytics('About Me', 'User wanted to read more about ,e')
                    }}> Read More...</span>}
                {!hidden &&
                    <>
                        <span id='aboutMore' className={hidden ? 'hidden' : ''}>
                            I spent the last few years as a night manager for Protech Automotive where I supervised and trained a team of 6-10 people, and more recently as an aircraft deicer. I started at Protech Auotmotive as a lube technician but my attention to detail, willingness to learn and learn quickly, and hard work got me promoted to Night Manager for the express lube in a short 3 months. My past experience in the automotive field working hands on with different tools and vehicles coupled with growing up around a computer I knew I wanted to combine the best of both worlds and get into the tech world so I took a risk, and left the safety of my job to pursue a career and more importantly my dreams.
                        </span>
                        <span className='moreLess' onClick={() => {
                            setHidden(!hidden)
                            analytics('About Me', 'User closed the About Me section')
                            }}><br />Less...</span>
                    </>}
            </p>
        </header>
    )
}
