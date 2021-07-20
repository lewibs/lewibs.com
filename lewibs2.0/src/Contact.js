import './contact.css';

function Contact() {
    return (
        <footer id='contact'>
            <div className="grid">
                <div className="quote gridItem">
                    <h2>"It is possible to commit no mistakes and still lose. That is not weakness, that is life."</h2>
                    <h4>- Jean-Luc Picard</h4>
                </div>
                <div className="media gridItem">
                    <strong>LEWIBS</strong>
                    <br />
                    <a href="#" className="fa fa-instagram" ></a>
                    <a href="#" className="fa fa-spotify"></a>
                    <a href="#" className="fa fa-github"></a>
                </div>
                <div class="contact gridItem">
                    <a href="#" className="color1"><span>(919) 909-8267</span><span className="fa fa-phone"></span></a>
                    <br />
                    <a href="#" className="color1"><span>BenjaminSL2000@gmail.com</span><span className="fa fa-at"></span></a>
                </div>
            </div>
            <hr />
            <div id="bye">
                ok you can go now
            </div>
        </footer>
    );
}

export default Contact;