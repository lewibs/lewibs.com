import './nav.css';
import Button from './Button'

function Nav() {

    return (
        <nav id="nav">
            <span id="navHome">
                <Button text='lewibs' href='#home' />
            </span>
            <span id="navLogo">
                At the end of the day whoever has the longest wikipedia wins.
            </span>
            <span id="navButtons">
                <Button text='About Me' href='#aboutMe' />
                <a className="btn" href="#skills">Skills & Experience</a>
                <a className="btn" href="#projects">Projects</a>
                <a className="btn" href="#contact">Contact</a>
            </span>
        </nav>
    );
}

export default Nav;