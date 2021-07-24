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
                <Button className='color1' text='About Me' href='#aboutMe' />
                <Button className='color1' text='Skills' href='#skills' />
                <Button className='color1' text='Projects' href='#projects' />
                <Button className='color1' text='Contact' href='#contact' />
            </span>
        </nav>
    );
}

export default Nav;