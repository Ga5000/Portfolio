import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
