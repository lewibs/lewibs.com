import './nav.css';

function Nav() {

    return (
        <nav id="nav">
            <div id="navHome">
                <a className="btn" href="#home">lewibs</a>
            </div>
            <div id="navLogo">
                At the end of the day whoever has the longest wikipedia wins.
        </div>
            <div id="navButtons">
                <a className="btn" href="#aboutMe">About Me</a>
                <a className="btn" href="#skills">Skills & Experience</a>
                <a className="btn" href="#projects">Projects</a>
                <a className="btn" href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default Nav;