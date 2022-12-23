import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Background from './Background';
import Skills from './Skills';

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