import './nav.css';
import Button from './Button'

function Nav() {

    return (
        <nav id="nav" className='background1 color1'>
            <span id="navHome">
                <Button className='color1' text='lewibs' href='#home' />
            </span>
            <span id="navLogo">
                At the end of the day whoever has the longest Wikipedia wins.
            </span>
            <span className='welcome'>
                Wecome to my website!
            </span>
            <span id="navButtons">
                <Button className='color1' text='About Me' href='#aboutAnchor' />
                <Button className='color1' text='Skills' href='#skillsAnchor' />
                <Button className='color1' text='Projects' href='#projectsAnchor' />
                <Button className='color1' text='Contact' href='#contactAnchor' />
            </span>
        </nav>
    );
}

export default Nav;