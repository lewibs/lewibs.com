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
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;