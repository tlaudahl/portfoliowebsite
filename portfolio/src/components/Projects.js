import React from 'react'
import { Button } from '@material-ui/core';

export default function Projects() {

    return (
        <section className='projectsContainer' id='projects'>
            <h1>Projects</h1>
            <div className='projectsDiv'>
                <div className='projects'>
                    <h2>I'll Serve Soup</h2>
                    <p>I'll Serve Soup was created by a team of developers using a variety of technology over the course of one week</p>
                    <p>I helped create the marketing landing page that links over to the main react app crated by the React developers.</p>
                    <div className='projectButtonContainer'>
                        <a href='https://github.com/bw-ill-serve-soup/web-ui-bryant-travis' target='_blank'>
                            <Button className='projectButton' variant='contained' style={{ backgroundColor: '#45A29E' }}>
                            Code
                            </Button>
                        </a>
                        <a href='https://illservesoup23.netlify.com/' target='_blank'>
                        <Button className='projectButton' variant='contained' style={{ backgroundColor: '#45A29E' }}>
                            Live
                        </Button>
                        </a>
                        <p>Technologies Used</p>
                        <div className='technologies'>
                            <div className='technology'>HTML5 <i class="fab fa-html5 fa-2x"></i></div>
                            <div className='technology'>CSS3 <i class="fab fa-css3-alt fa-2x"></i></div>
                            <div className='technology'>JavaScript <i class="fab fa-js-square fa-2x"></i></div>
                            <div className='technology'>LESS <i class="fab fa-less fa-2x"></i></div>
                        </div>
                    </div>
                </div>
                <div className='projects'>
                    <h2>Nasa - Photo of the day</h2>
                    <p>This project was used to practice with axios making get requests to an external api and passing props and state to different components.</p>
                    <p>I used the Nasa API to get the photo of the day, and added a date picker to select a different day and see the image nasa picked for that day</p>
                    <div className='projectButtonContainer'>
                        <a href='https://github.com/tlaudahl/nasa-photo-of-the-day' target='_blank'>
                            <Button className='projectButton' variant='contained' style={{ backgroundColor: '#45A29E' }}>
                            Code
                            </Button>
                        </a>
                        <a href='https://tlaudahl-nasa-apod.netlify.com/' target='_blank'>
                        <Button className='projectButton' variant='contained' style={{ backgroundColor: '#45A29E' }}>
                            Live
                        </Button>
                        </a>
                        <p>Technologies Used</p>
                        <div className='technologies'>
                            <div className='technology'>HTML5 <i class="fab fa-html5 fa-2x"></i></div>
                            <div className='technology'>CSS3 <i class="fab fa-css3-alt fa-2x"></i></div>
                            <div className='technology'>JavaScript <i class="fab fa-js-square fa-2x"></i></div>
                            <div className='technology'>React <i class="fab fa-react fa-2x"></i></div>
                        </div>
                    </div>
                </div>
                <div className='projects'>
                    <h2>Rick and Morty API</h2>
                    <p>This project was used to practice with axios making get requests to an external api</p>
                    <p>I also go to practice passing props and changing state between components along with use React Router</p>
                    <div className='projectButtonContainer'>
                        <a href='https://github.com/tlaudahl/Sprint-Challenge-Single-Page-Apps' target='_blank'>
                            <Button className='projectButton' variant='contained' style={{ backgroundColor: '#45A29E' }}>
                            Code
                            </Button>
                        </a>
                        <a href='https://randmapi.netlify.com/' target='_blank'>
                        <Button className='projectButton' variant='contained' style={{ backgroundColor: '#45A29E' }}>
                            Live
                        </Button>
                        </a>
                        <p>Technologies Used</p>
                        <div className='technologies'>
                            <div className='technology'>HTML5 <i class="fab fa-html5 fa-2x"></i></div>
                            <div className='technology'>CSS3 <i class="fab fa-css3-alt fa-2x"></i></div>
                            <div className='technology'>JavaScript <i class="fab fa-js-square fa-2x"></i></div>
                            <div className='technology'>React <i class="fab fa-react fa-2x"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
