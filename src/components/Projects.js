import React from 'react'
import ReactGA from 'react-ga';
import ReactTooltip from "react-tooltip";
import '../css/projects.css';

export default function Projects() {
    const analytics = (category, action) => {
        ReactGA.event({
            category,
            action 
        })
    }

    return (
        <section className='projectsContainer' id='projects'>
            <h1>Projects</h1>
            <div className='projectsDiv'>
                <div className='projects'>
                    <h2>Space Cowboy</h2>
                    <p>Space Cowboy was created by four developers using React on the frontend and Flask on the backend.</p>
                    <p>Responsible for displaying the "space cowboy" over canvas, then being able to control it with arrow keys and WASD, and using Canvas API to display a tilemap generated from the backend.</p>
                    <div className='projectButtonContainer'>
                        <a href='https://github.com/python-django-unchained/space-cowboy--FE' target='_blank' rel="noopener noreferrer">
                            <button className='projectButton' variant='contained' onClick={() => analytics('Projects', 'Clicked to view code for Space Cowboy')}>
                            CODE
                            </button>
                        </a>
                        <a href='https://space-cowboys.netlify.com/' target='_blank' rel="noopener noreferrer">
                        <button className='projectButton' variant='contained' onClick={() => analytics('Projects', 'Clicked to view live version of Space Cowboy')}>
                            LIVE
                        </button>
                        </a>
                        <button className='projectButton' data-tip data-for='cowboy_tech'>
                            TECH
                        </button>
                        <ReactTooltip effect="solid" className='toolTip' id='cowboy_tech' aria-haspopup="true" role="Tool Tip">
                            <div className='technologies'>
                                <div className='technology'>JavaScript <div><i id='skill' className="fab fa-js-square fa-2x"></i></div></div>
                                <div className='technology'>React <div><i id='skill' className="fab fa-react fa-2x"></i></div></div>
                                <div className='technology'>Python <div><i class="fab fa-python fa-2x"></i></div></div>
                                <div className='technology'>Flask <div><i class="fas fa-flask fa-2x"></i></div></div>
                                <div className='technology'>HTML5 <div><i id='skill' className="fab fa-html5 fa-2x"></i></div></div>
                                <div className='technology'>CSS3 <div><i id='skill' className="fab fa-css3-alt fa-2x"></i></div></div>
                            </div>
                        </ReactTooltip>
                    </div>
                    <img style={{ cursor: 'pointer' }} onTouchStart={e => (e.currentTarget.src=require('../assets/space-cowboy/overview.gif'))} onMouseOver={e => (e.currentTarget.src=require('../assets/space-cowboy/overview.gif'))} onMouseOut={e => (e.currentTarget.src = require('../assets/space-cowboy/map-bw.jpg'))} src={require("../assets/space-cowboy/map-bw.jpg")} alt='Space Cowboy Project' onClick={() => window.open('https://sparandmapi.netlify.com', '_blank')} />
                </div>
                <div className='projects'>
                    <h2>Rick and Morty API</h2>
                    <p>This project was used with Axios making get requests to an external API, React and React Router using dynamic routes for each location, episode, and character.</p>
                    <div className='projectButtonContainer'>
                        <a href='https://github.com/tlaudahl/React-Redux-App' target='_blank' rel="noopener noreferrer">
                            <button className='projectButton' variant='contained' onClick={() => analytics('Projects', 'Clicked to view the code for Rick and Morty API App')}>
                            CODE
                            </button>
                        </a>
                        <a href='https://sparandmapi.netlify.com' target='_blank' rel="noopener noreferrer">
                        <button className='projectButton' variant='contained' onClick={() => analytics('Projects', 'Clicked to view the live version of Rick and Morty API App')}>
                            LIVE
                        </button>
                        </a>
                        <button className='projectButton' data-tip data-for='rm_tech'>
                            TECH
                        </button>
                        <ReactTooltip effect="solid" className='toolTip' id='rm_tech' aria-haspopup="true" role="Tool Tip">
                            <div className='technologies'>
                                <div className='technology'>JavaScript <div><i id='skill' className="fab fa-js-square fa-2x"></i></div></div>
                                <div className='technology'>React <div><i id='skill' className="fab fa-react fa-2x"></i></div></div>
                                <div className='technology'>React Redux<div><i id='skill' className="fab fa-react fa-2x"></i></div></div>
                                <div className='technology'>HTML5 <div><i id='skill' className="fab fa-html5 fa-2x"></i></div></div>
                                <div className='technology'>CSS3 <div><i id='skill' className="fab fa-css3-alt fa-2x"></i></div></div>
                            </div>
                        </ReactTooltip>
                    </div>
                    <img style={{ cursor: 'pointer' }} onTouchStart={e => (e.currentTarget.src=require('../assets/rick-and-morty/rick_and_morty.gif'))} onMouseOver={e => (e.currentTarget.src=require('../assets/rick-and-morty/rick_and_morty.gif'))} id='rickAndMortyPic' onMouseOut={e => (e.currentTarget.src = require('../assets/rick-and-morty/rick_and_morty_bw.jpg'))} src={require("../assets/rick-and-morty/rick_and_morty_bw.jpg")} alt='Rick and Morty Project GIF' onClick={() => window.open('https://sparandmapi.netlify.com', '_blank')} />
                </div>
                <div className='projects'>
                    <h2>NASA - Photo of the day</h2>
                    <p>This project was used with Axios making get requests to an external API and passing props and state.</p>
                    <p>You can view NASA's Photo Of The Day all the way back to June 23rd, 1995 - the first ever Photo Of The Day</p>
                    <div className='projectButtonContainer'>
                        <a href='https://github.com/tlaudahl/nasa-photo-of-the-day' target='_blank' rel="noopener noreferrer">
                            <button className='projectButton' variant='contained' onClick={() => analytics('Projects', 'Clicked to view the code for NASA Project')}>
                            CODE
                            </button>
                        </a>
                        <a href='https://tlaudahl-nasa-apod.netlify.com/' target='_blank' rel="noopener noreferrer">
                        <button className='projectButton' variant='contained' onClick={() => analytics('Projects', 'Clicked to view the live version for the NASA Project')}>
                            LIVE
                        </button>
                        </a>
                        <button className='projectButton' data-tip data-for='nasa_tech'>
                            TECH
                        </button>
                        <ReactTooltip effect="solid" className='toolTip' id='nasa_tech' aria-haspopup="true" role="Tool Tip">
                            <div className='technologies'>
                                <div className='technology'>JavaScript <div><i id='skill' className="fab fa-js-square fa-2x"></i></div></div>
                                <div className='technology'>React <div><i id='skill' className="fab fa-react fa-2x"></i></div></div>
                                <div className='technology'>HTML5 <div><i id='skill' className="fab fa-html5 fa-2x"></i></div></div>
                                <div className='technology'>CSS3 <div><i id='skill' className="fab fa-css3-alt fa-2x"></i></div></div>
                            </div>
                        </ReactTooltip>
                    </div>
                    <img style={{ cursor: 'pointer' }} onTouchStart={e => (e.currentTarget.src=require('../assets/nasa/nasa.gif'))} onMouseOver={e => (e.currentTarget.src=require('../assets/nasa/nasa.gif'))} onMouseOut={e => (e.currentTarget.src = require('../assets/nasa/main_bw.jpg'))} src={require("../assets/nasa/main_bw.jpg")} alt='Rick and Morty Project GIF' onClick={() => window.open('https://sparandmapi.netlify.com', '_blank')} />
                </div>
            </div>
        </section>
    )
}
