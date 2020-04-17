import React from 'react'
import ReactGA from 'react-ga';

import '../css/navigation.css'

export default function Navigation() {
    return (
        <div className='navBar'>
            <nav className='navigation'>
                <div className='logo'>
                <h2>TRAVIS LAUDAHL</h2>
                </div>
                    <div className='navLinks'>
                        <a href='#home' onClick={() => ReactGA.event({
                            category: 'Navigation',
                            action: 'User pressed Home in navigation'
                        })}>Home</a>
                        <a href='#skills' onClick={() => ReactGA.event({
                            category: 'Navigation',
                            action: 'User pressed Skills in navigation'
                        })}>Skills</a>
                        <a href='#projects' onClick={() => ReactGA.event({
                            category: 'Navigation',
                            action: 'User pressed Projects in navigation'
                        })}>Projects</a>
                        <a href='https://docs.google.com/document/d/17swNh6OmSxlC8IktxkgFxPO2Q9Z32zx4T8qT6noyHNw/edit?usp=sharing' target='_blank' rel="noopener noreferrer" onClick={() => {
                            ReactGA.event({
                            category: 'Navigation',
                            action: 'User pressed Resume in navigation'
                        })}}>Resume</a>
                        <a href='#contact' onClick={() => ReactGA.event({
                            category: 'Navigation',
                            action: 'User pressed Contact in navigation'
                        })}>Contact</a>
                    </div>
            </nav>
        </div>
    )
}
