import React from 'react';
import ReactGA from 'react-ga';
import CookieConsent from 'react-cookie-consent';

import './App.css';
import Header from './components/Header'
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Footer from './components/Footer';

const trackingId = 'UA-157433924-1'

ReactGA.initialize(trackingId);
ReactGA.set({ anonymizeIp: true });
ReactGA.pageview(window.location.pathname);

function App() {
  console.log('I too like to look under the hood of websites! Reach out @ contact@travislaudahl.com')
  return (
    <div className="App">
      <CookieConsent
        location='bottom'
        buttonText='Okay'
        style={{ color: 'white', background: '#04060D' }}
        buttonStyle={{ background: '#66fcf1', fontWeight: 'bold' }}
      >
        This website uses google analytics, mainly for practice, but to also track page views, button clicks, and load times. {" "}
      </CookieConsent>
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
