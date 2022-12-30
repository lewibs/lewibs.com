import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import Skills from './components/Skills';
import React from 'react';

function App() {
    return (
        <div>
            <Background />
            <Home />
            <Nav />
            <main>
                <div className='anchor' id='aboutAnchor' />
                <About />
                <div className='anchor' id='skillsAnchor' />
                <Skills />
                <div className='anchor' id='projectsAnchor' />
                <Projects />
            </main>
            <div className='anchor' id='contactAnchor' />
            <Contact />
        </div>
    );
}

export default App;