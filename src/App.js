import React from 'react';
import Fade from 'react-reveal/Fade';
import './App.css';
import Header from './components/Header'
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
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
