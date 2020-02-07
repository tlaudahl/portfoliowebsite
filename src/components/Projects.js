import React from 'react'
import ReactGA from 'react-ga';
import { Button, withStyles } from '@material-ui/core';
import '../css/projects.css';

export default function Projects() {

    const ColorButton = withStyles(theme => ({
        root: {
            backgroundColor: '#45a29e',
        },
    }))(Button);

    const analytics = (category, action) => {
        ReactGA.event({
            category: category,
            action: action 
        })
    }

    return (
        <section className='projectsContainer' id='projects'>
            <h1>Projects</h1>
            <div className='projectsDiv'>
                <div className='projects'>
                    <h2>I'll Serve Soup</h2>
                    <p>I'll Serve Soup was created by a team of developers using a variety of technology over the course of one week</p>
                    <p>I was responsible for building the "Marketing Page" which is the page you will see if you click the Live button. It was built after finishing the first unit (3 weeks) at Lambda School.</p>
                    <div className='projectButtonContainer'>
                        <a href='https://github.com/bw-ill-serve-soup/web-ui-bryant-travis' target='_blank' rel="noopener noreferrer">
                            <ColorButton className='projectButton' variant='contained' onClick={() => analytics('Projects', 'Clicked to view code for I Serve Soup')}>
                            Code
                            </ColorButton>
                        </a>
                        <a href='https://illservesoup23.netlify.com/' target='_blank' rel="noopener noreferrer">
                        <ColorButton className='projectButton' variant='contained' onClick={() => analytics('Projects', 'Clicked to view live version on I Serve Soup')}>
                            Live
                        </ColorButton>
                        </a>
                    </div>
                </div>
                <div className='projects'>
                    <h2>NASA - Photo of the day</h2>
                    <p>This project was used with Axios making get requests to an external API and passing props and state.</p>
                    <div className='projectButtonContainer'>
                        <a href='https://github.com/tlaudahl/nasa-photo-of-the-day' target='_blank' rel="noopener noreferrer">
                            <ColorButton className='projectButton' variant='contained' onClick={() => analytics('Projects', 'Clicked to view the code for NASA Project')}>
                            Code
                            </ColorButton>
                        </a>
                        <a href='https://tlaudahl-nasa-apod.netlify.com/' target='_blank' rel="noopener noreferrer">
                        <ColorButton className='projectButton' variant='contained' onClick={() => analytics('Projects', 'Clicked to view the live version for the NASA Project')}>
                            Live
                        </ColorButton>
                        </a>
                    </div>
                </div>
                <div className='projects'>
                    <h2>Rick and Morty API</h2>
                    <p>This project was used with Axios making get requests to an external API, React and React Router</p>
                    <div className='projectButtonContainer'>
                        <a href='https://github.com/tlaudahl/React-Redux-App' target='_blank' rel="noopener noreferrer">
                            <ColorButton className='projectButton' variant='contained' onClick={() => analytics('Projects', 'Clicked to view the code for Rick and Morty API App')}>
                            Code
                            </ColorButton>
                        </a>
                        <a href='https://sparandmapi.netlify.com' target='_blank' rel="noopener noreferrer">
                        <ColorButton className='projectButton' variant='contained' onClick={() => analytics('Projects', 'Clicked to view the live version of Rick and Morty API App')}>
                            Live
                        </ColorButton>
                        </a>
                    </div>
                    <img style={{ cursor: 'pointer'}} onMouseOver={e => (e.currentTarget.src=require('../assests/rick_and_morty.gif'))} id='rickAndMortyPic' onMouseOut={e => (e.currentTarget.src = require('../assests/rick_and_morty_bw.jpg'))} src={require("../assests/rick_and_morty_bw.jpg")} alt='Rick and Morty Project GIF' onClick={() => window.open('https://sparandmapi.netlify.com', '_blank')} />
                </div>
            </div>
        </section>
    )
}
