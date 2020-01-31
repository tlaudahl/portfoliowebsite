import React from 'react';
import { Route } from 'react-router-dom';

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
      {console.log('I too like to look under the hood of websites! Reach out @ travis.laudahl@gmail.com')}
      <Route path='/' component={Navigation} />
      <Route path='/' exact component={Header} />
      <Route path='/' exact component={Projects} />
      <Route path='/' exact component={Skills} />
      <Route path='/' exact component={ContactForm} />
      <Route path='/' component={Footer}/>
    </div>
  );
}

export default App;
