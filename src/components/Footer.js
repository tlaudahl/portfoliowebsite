import React from 'react'
import '../css/footer.css'

export default function Footer() {

    const handleClick = e => {
        const links = {
            linkedin: 'https://www.linkedin.com/in/travis-laudahl/',
            twitter: 'https://twitter.com/LaudahlTravis',
            github: 'https://github.com/tlaudahl'
        }
        window.open(links[e.target.id], '_blank');
    }

    return (
        <footer>
            <div className='copyEmail'>
                <p>&copy; Travis Laudahl</p>
                <i id='email' title='travis.laudahl@gmail.com' className="fas fa-envelope fa-2x"></i>
                <p>travis.laudahl@gmail.com</p>
            </div>
            <div className='socials'>
                <i id='github' title='Minnesota' className="fab fa-github fa-2x" onClick={handleClick}></i>
                <i id='linkedin' title='travis-laudahl' className="fab fa-linkedin-in fa-2x" onClick={handleClick}></i>
                <i id='twitter' title='LaudahlTravis' className="fab fa-twitter fa-2x" onClick={handleClick}></i>
            </div>
        </footer>
    )
}
