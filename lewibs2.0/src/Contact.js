import './contact.css';

function Contact() {
    return (
        <footer className='background1 color1 section'>
            <article id='contact'>
                <div className="grid">
                    <div className="quote gridItem">
                        <h2>"It is possible to commit no mistakes and still lose. That is not weakness, that is life."</h2>
                        <h4>- Jean-Luc Picard</h4>
                    </div>
                    <div className="media gridItem">
                        <strong>LEWIBS</strong>
                        <br />
                        <a href="#" className="fa fa-instagram color1"></a>
                        <a href="#" className="fa fa-spotify color1"></a>
                        <a href="#" className="fa fa-github color1"></a>
                    </div>
                    <div class="contact gridItem">
                        <a className="color1 contactInfo"><span className='text'>(919) 909-8267</span><span className="fa fa-phone"></span></a>
                        <br />
                        <a className="color1 contactInfo"><span className='text'>benjamin@lewibs.com</span><span className="fa fa-at"></span></a>
                    </div>
                </div>
                <hr />
                <div id="bye">
                    ok you can go now
                </div>
            </article>
        </footer>
    );
}

export default Contact;