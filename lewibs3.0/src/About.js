import Button from './Button';
import './about.css';

function About() {
    return (
        <section className='section background2 aboutMe' >
            <div className='before' />
            <div id="aboutMe">
                <div className='grid background2'>
                    <img src='../images/BenjaminLewis.PNG' alt="Benjamin Lewis" />
                    <h1 className='gridItem'>Hey, I'm Benjamin</h1>
                    <h4 className='gridItem color3'>I Make Stuff</h4>
                    <div className='about gridItem'>
                        I am passionate about design in all its shapes and sizes.
                        I've made things ranging from, hovercraft to robots, websites
                        to games, all the way up to security applications and 4D imaging
                        tools for power plants.
                        I love to learn new things that allow me to look at the world in different and imaginitive ways.
                        <br/>
                        <br/>
                        Right now, I'm enjoying working as a lead developer for a startup called <a href="https://powern.ai/">PowerN</a> and I'm always thinking
                        about the next program I can write.
                    </div>
                    <Button className='resume gridItem background5 color1' text='Resume' href='benjamin_resume.pdf' />
                </div>
            </div>
        </section>
    );
}

export default About;