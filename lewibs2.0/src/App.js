import Nav from './Nav';
import Home from './Home';
import About from './About';
import Sae from './Sae';
import Projects from './Projects';
import Contact from './Contact';

function App() {
    return (
        <div>
            <Nav />

            <main>
                <Home />
                <About />
                <Sae />
                <Projects />
            </main>

            <Contact />
        </div>
    );
}

export default App;