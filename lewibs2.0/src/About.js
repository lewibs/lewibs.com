import Button from './Button';
import './about.css';

function About() {
    return (
        <section id="aboutMe">
            <div class='grid'>
                <img src='../images/BenjaminLewis.PNG' alt="Benjamin Lewis" />
                <h1 className='gridItem'>Hey, I'm Benjamin</h1>
                <h4 className='gridItem'>I Make Stuff</h4>
                <div className='about gridItem'>
                    According to all known laws
                    of aviation,

                     
                    there is no way a bee
                    should be able to fly.

                     
                    Its wings are too small to get
                    its fat little body off the ground.

                     
                    The bee, of course, flies anyway

                     
                    because bees don't care
                    what humans think is impossible.

                     
                    Yellow, black. Yellow, black.
                    Yellow, black. Yellow, black.

                     
                    Ooh, black and yellow!
                    Let's shake it up a little.

                     
                    Barry! Breakfast is ready!

                     
                    Ooming!

                     
                    Hang on a second.

                     
                    Hello?
                </div>
                <Button className='resume gridItem' text='My Resume' href='#' />
            </div>
        </section>
    );
}

export default About;