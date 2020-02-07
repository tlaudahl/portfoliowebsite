import React, { useState } from 'react';
import ReactGA from 'react-ga';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, makeStyles } from '@material-ui/core';


import './App.css';
import Header from './components/Header'
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Footer from './components/Footer';

const trackingId = 'UA-157433924-1'

ReactGA.set({ anonymizeIp: true })

const useStyles = makeStyles({
  root: {
    background: '#0b0c10',
    color: '#66FCF1',
    lineHeight: 1.6
  },
  rootText: {
    color: 'white',
    fontFamily: 'Muli',
    lineHeight: 1.6
  },
  buttonRoot: {
    color: '#45A29E',
    fontFamily: 'Muli',
  },
  paper: {
    background: '#0b0c10',
    color: 'white',
    lineHeight: 1.6
  }
})

function App() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    console.log('I too like to look under the hood of websites! Reach out @ contact@travislaudahl.com')
    setOpen(false);
  }

  const classes = useStyles();

  
  return (
    <div className="App">
    <Dialog
      classes={{ paper: classes.paper }}
      open={open}
      // onClose={handleClose}
      aria-labelledby='Google Analytics Acceptance'
      aria-describedby='Accept Google Analytics'
      >
        <DialogTitle classes={{ root: classes.root }} id='alert-dialog-title'>{"Accept the use of google analytics?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description' classes={{ root: classes.rootText }}>
            I added Google Analytics to my portfolio site simply for the practice and to track things like page views, button clicks and load times. Button clicks are so I know if anyone who views my portfolio actually clicks to view any of my projects or social accounts. I added this popup so you may opt out if you don't want anything sent to google.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button classes={{ root: classes.buttonRoot }} onClick={handleClose}>
            Disagree
          </Button>
          <Button classes={{ root: classes.buttonRoot }} onClick={() => {
            window['ga-disable-UA-157433924-1'] = false;
            ReactGA.initialize(trackingId);
            ReactGA.pageview(window.location.pathname);
            handleClose();
          }}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Navigation />
      <Header />
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
