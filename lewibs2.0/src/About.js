import Button from './Button';
import './about.css';

function About() {
    return (
        <section id="aboutMe">
            <div>
                <img src='../images/BenjaminLewis.PNG' alt="Benjamin Lewis" />
                <h1>Hey, I'm Benjamin</h1>
                <h4>I Make Stuff</h4>
                <div>
                    I'm benjamin
                </div>
                <div>
                    <Button text='My Resume' href='#' />
                </div>
            </div>
        </section>
    );
}

export default About;