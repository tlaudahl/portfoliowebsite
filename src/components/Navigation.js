import React from 'react'

import '../css/navigation.css'

export default function Navigation() {
    return (
        <div className='navBar'>
            <nav className='navigation'>
                <div className='logo'>
                <h2>TL.D</h2>
                </div>
                    <div className='navLinks'>
                        <a href='#home'>Home</a>
                        <a href='#skills'>Skills</a>
                        <a href='#projects'>Projects</a>
                        <a href='#contact'>Contact</a>
                    </div>
            </nav>
        </div>
    )
}
