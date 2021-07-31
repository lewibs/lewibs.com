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
                        My introduction into development was through making hovercrafts it was here that I learned that I enjoyed making things.
                        In college I quickly realized it was not just physical design that excited me but the process and creation of a system.
                        This joy was easily translated into computer science projects.
                        I have come to realize that the best design is not only practical but also conveys a feeling which raises the quality of the project.
                        I am interested in full stack development and machine learning.
                        Feel free to send me a text or an email. I'll enjoy talking to you!
                    </div>
                    <Button className='resume gridItem background5 color1' text='My Resume' href='benjamin_resume.pdf' />
                </div>
            </div>
        </section>
    );
}

export default About;