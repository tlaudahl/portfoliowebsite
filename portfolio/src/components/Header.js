import React from 'react'
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
            <h1>Travis Laudahl</h1>
            <div className='socials'>
                <div className='email'><a href='#contact'><i id='email' title='travis.laudahl@gmail.com' className="fas fa-envelope fa-2x"></i></a><p>travis.laudahl@gmail.com</p></div>
                <i id='github' title='Minnesota' className="fab fa-github fa-2x" onClick={handleClick}></i>
                <i id='linkedin' title='travis-laudahl' className="fab fa-linkedin-in fa-2x" onClick={handleClick}></i>
                <i id='twitter' title='LaudahlTravis' className="fab fa-twitter fa-2x" onClick={handleClick}></i>
            </div>
            <h2>Full Stack Web Developer</h2>
            <p id='about'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet lectus sit amet risus scelerisque accumsan et ac risus. Aenean vulputate sagittis arcu. Maecenas eget fermentum est. Sed ornare facilisis dapibus. Fusce vel eros volutpat, tempor velit at, pretium urna. Praesent rhoncus eros nibh, sed sagittis ante facilisis vitae. 
            </p>
        </header>
    )
}
