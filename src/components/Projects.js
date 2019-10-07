import React from 'react'
import { Button, withStyles } from '@material-ui/core';
import '../css/projects.css';

export default function Projects() {

    const ColorButton = withStyles(theme => ({
        root: {
          backgroundColor: '#45a29e',
        },
      }))(Button);

    return (
        <section className='projectsContainer' id='projects'>
            <h1>Projects</h1>
            <div className='projectsDiv'>
                <div className='projects'>
                    <h2>I'll Serve Soup</h2>
                    <p>I'll Serve Soup was created by a team of developers using a variety of technology over the course of one week</p>
                    <div className='projectButtonContainer'>
                        <a href='https://github.com/bw-ill-serve-soup/web-ui-bryant-travis' target='_blank' rel="noopener noreferrer">
                            <ColorButton className='projectButton' variant='contained'>
                            Code
                            </ColorButton>
                        </a>
                        <a href='https://illservesoup23.netlify.com/' target='_blank' rel="noopener noreferrer">
                        <ColorButton className='projectButton' variant='contained'>
                            Live
                        </ColorButton>
                        </a>
                    </div>
                        <p>Technologies Used</p>
                        <div className='technologies'>
                            <div className='technology'>HTML5 <i className="fab fa-html5 fa-2x"></i></div>
                            <div className='technology'>CSS3 <i className="fab fa-css3-alt fa-2x"></i></div>
                            <div className='technology'>JavaScript <i className="fab fa-js-square fa-2x"></i></div>
                            <div className='technology'>LESS <i className="fab fa-less fa-2x"></i></div>
                        </div>
                </div>
                <div className='projects'>
                    <h2>Nasa - Photo of the day</h2>
                    <p>This project was used with axios making get requests to an external api and passing props and state.</p>
                    <div className='projectButtonContainer'>
                        <a href='https://github.com/tlaudahl/nasa-photo-of-the-day' target='_blank' rel="noopener noreferrer">
                            <ColorButton className='projectButton' variant='contained'>
                            Code
                            </ColorButton>
                        </a>
                        <a href='https://tlaudahl-nasa-apod.netlify.com/' target='_blank' rel="noopener noreferrer">
                        <ColorButton className='projectButton' variant='contained'>
                            Live
                        </ColorButton>
                        </a>
                        <p>Technologies Used</p>
                        <div className='technologies'>
                            <div className='technology'>HTML5 <i className="fab fa-html5 fa-2x"></i></div>
                            <div className='technology'>CSS3 <i className="fab fa-css3-alt fa-2x"></i></div>
                            <div className='technology'>JavaScript <i className="fab fa-js-square fa-2x"></i></div>
                            <div className='technology'>React <i className="fab fa-react fa-2x"></i></div>
                        </div>
                    </div>
                </div>
                <div className='projects'>
                    <h2>Rick and Morty API</h2>
                    <p>This project was used with axios making get requests to an external api, react and react router</p>
                    <div className='projectButtonContainer'>
                        <a href='https://github.com/tlaudahl/Sprint-Challenge-Single-Page-Apps' target='_blank' rel="noopener noreferrer">
                            <ColorButton className='projectButton' variant='contained'>
                            Code
                            </ColorButton>
                        </a>
                        <a href='https://randmapi.netlify.com/' target='_blank' rel="noopener noreferrer">
                        <ColorButton className='projectButton' variant='contained'>
                            Live
                        </ColorButton>
                        </a>
                        <p>Technologies Used</p>
                        <div className='technologies'>
                            <div className='technology'>HTML5 <i className="fab fa-html5 fa-2x"></i></div>
                            <div className='technology'>CSS3 <i className="fab fa-css3-alt fa-2x"></i></div>
                            <div className='technology'>JavaScript <i className="fab fa-js-square fa-2x"></i></div>
                            <div className='technology'>React <i className="fab fa-react fa-2x"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
