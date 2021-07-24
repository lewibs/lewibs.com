import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Background from './Background';
import Skills from './Skills';

//<Projects />

function App() {
    return (
        <div>
            <Background />
            <Home />
            <Nav />
            <main>
                <About />
                <Skills />
                <Projects />
            </main>
            <Contact />
        </div>
    );
}

export default App;