import './nav.css';
import Button from './Button'

function Nav() {

    return (
        <nav id="nav">
            <span id="navHome">
                <Button text='lewibs' href='#home' />
            </span>
            <span id="navLogo">
                At the end of the day whoever has the longest Wikipedia wins.
            </span>
            <span id="navButtons">
                <Button text='About Me' href='#aboutMe' />
                <Button text='Contact' href='#contact' />
            </span>
        </nav>
    );
}

export default Nav;