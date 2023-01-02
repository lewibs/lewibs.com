import { useRef } from "react";
import { About } from "./content/About";
import { Header } from "./content/Header";
import { Home } from "./content/Home";
import { Skills } from "./content/Skills";
import { Projects } from "./content/Projects";
import { Contact } from "./content/Contact";

function App() {
    const home = useRef();
    const about = useRef();
    const skills = useRef();
    const projects = useRef();
    const contact = useRef();

    return (
        <>
            <Home ref={home} goto={about} />
            <Header refs={{
                "Lewibs": home,
                "About Me": about,
                "Skills": skills,
                "Projects": projects,
                "Contact": contact,
            }}/>
            <About ref={about} />
            <Skills ref={skills} />
            <Projects ref={projects} />
            <Contact ref={contact} />
        </>
    );
}

export default App;