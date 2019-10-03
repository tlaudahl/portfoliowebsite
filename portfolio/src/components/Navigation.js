import React from 'react'

export default function Navigation() {
    return (
        <div className='navBar'>
            <nav className='navigation'>
                <div className='logo'>
                {/* <h2>&lt;TL.D&gt;</h2> */}
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
