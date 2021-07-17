import Button from './Button';
import './about.css';

function About() {
    return (
        <section id="aboutMe">
            <div class='grid'>
                <img src='../images/BenjaminLewis.PNG' alt="Benjamin Lewis" />
                <h1>Hey, I'm Benjamin</h1>
                <h4>I Make Stuff</h4>
                <div className='about'>
                    I'm benjamin GAHHHHHHHHHHHHHHHHHHHHHHH GAHHHHHHHHHHHHHHHHHHHHHHH GAHHHHHHHHHHHHHHHHHHHHHHH GAHHHHHHHHHHHHHHHHHHHHHHH GAHHHHHHHHHHHHHHHHHHHHHHH GAHHHHHHHHHHHHHHHHHHHHHHH GAHHHHHHHHHHHHHHHHHHHHHHH GAHHHHHHHHHHHHHHHHHHHHHHH GAHHHHHHHHHHHHHHHHHHHHHHH GAHHHHHHHHHHHHHHHHHHHHHHH GAHHHHHHHHHHHHHHHHHHHHHHH GAHHHHHHHHHHHHHHHHHHHHHHH
                </div>
                <Button className='resume' text='My Resume' href='#' />
            </div>
        </section>
    );
}

export default About;