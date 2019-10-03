import React from 'react';
import './App.css';
import Header from './components/Header'
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';
import Navigation from './components/Navigation';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
