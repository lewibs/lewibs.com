import '../css/projects.css';
import Project from './Project';
import React, { Component } from "react";
import Slider from "react-slick";

export default class Projects extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
            responsive: [
                {
                    breakpoint: 985,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 660,
                    settings: {
                        slidesToShow: 1,
                        autoplay: false
                    }
                }
            ]
        };

        return (
            <section className='background2 section'>
                <div id='projects'>
                    <h2>Projects</h2>

                    <div className='slider'>
                        <Slider {...settings}>
                            <div>
                                <Project image='../images/wackamon.PNG' title='Wakamon' link='http://wackamon.lewibs.com/' info='Wack-A-Mon implements the use of a FSM. This is used to simplify the code and make the program smoother. Additionally, it implements ajax to include a highscore list.' />
                            </div>
                            
                            <div>
                                <Project image='../images/eventador.png' title="eventador" link="https://www.npmjs.com/package/eventador" info="This project seamlessly allows you to make your events more robust and usable. This is done while maintaining standard js syntax and backwards compatibility." />
                            </div>

                            <div>
                                <Project image='../images/keylogger.png' title="lewibs-keylogger" link="https://www.npmjs.com/package/lewibs-keylogger" info='This keylogger was created to help save development time when the users actions needed to be verified or logged.' />
                            </div>

                            <div>
                                <Project image='../images/ticTacToe.PNG' title='Tic-Tac-Toe' link='https://github.com/lewibs/tic-tac-toe' info='This was made for a matlab TA interview. It was not intended to involve machine learning, but now that has been implemented, and the program uses past games to improve upon itself.' />
                            </div>

                            <div>
                                <Project image='https://github.com/ottery-app/global-data/blob/main/images/logos/logoDefault.png?raw=true' title="oui" link='https://www.npmjs.com/package/ottery-ui' info="Oui is the opensource ux framework, that I designed for ottery, a very large team project which I lead. Used for handling orginizations' security needs." />
                            </div>

                            <div>
                                <Project image='../images/clueSheet.PNG' title='Sheet-O-Matic' link='http://cluesheet.lewibs.com/' info='This game gives you an unfair advantage in CLUE as it looks back through past guesses and uses logic to determine who did the crime.' />
                            </div>

                            <div>
                                <Project image='../images/movieNightEtc.PNG' title='Movie Night Etc.' link='http://movienightetc.lewibs.com/' info='Movie Night Etc was part of an elaborate joke to make a blog. I taught myself PHP to make this website. This website is what introduced me to web development.' />
                            </div>

                            <div>
                                <Project image="https://github.com/lewibs/whatTheDuckIsThis/blob/main/images/duckscript.png?raw=true" title="ducktyper" link="https://github.com/lewibs/ducktyper" info="This is a project that allows type checking in javascript without needing to add typscript." />
                            </div>

                            <div>
                                <Project image='../images/wisdomDog.PNG' title='Wisdom Dog' link='http://wisdomdog.lewibs.com/' info='I made the wisdom dog to experiment with interactive websites and see how babble works. It was my first website using the basics.' />
                            </div>

                            <div>
                                <Project image='https://codestoresolutions.com/wp-content/uploads/2020/03/testing.png' title='usability-tracker' link='https://www.npmjs.com/package/usability-tracker' info="While reading the book, 'Don't Make Me Think', I was hit with this idea. It is a program that tracks the user movment and actions and allows saving them and playing them back." />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}