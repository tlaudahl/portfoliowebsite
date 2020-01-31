import React from 'react';
import ReactGA from 'react-ga';

import './App.css';
import Header from './components/Header'
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Footer from './components/Footer';

const trackingId = 'UA-157433924-1'
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname);

function App() {

  return (
    <div className="App">
      {console.log('I too like to look under the hood of websites! Reach out @ travis.laudahl@gmail.com')}
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
