import './projects.css';
import Project from './Project';

//<Project image='../images/wisdomDog.PNG' title='Wisdom Dog' />
//<Project image='../images/clueSheet.PNG' title='Sheet-O-Matic' />
//<Project image='../images/movieNightEtc.PNG' title='Movie Night Etc.' />
//<Project image='../images/ticTacToe.PNG' title='Tic-Tac-Toe' />
//<Project image='../images/wackamon.PNG' title='Wakamon' visit='http://wackamon.lewibs.com/' info='Whac-A-Mole is a popular arcade game and carnival game, originally known as Mogura Taiji in Japan. A typical Whac-A-Mole machine consists of a waist-level cabinet with a play area and display screen, and a large, soft, black mallet.' />


function Projects() {
    return (
        <section className='background2 section'>
            <div id='projects'>
                <h2>Projects</h2>

                <div className='items'>
                    <Project image='../images/wackamon.PNG' title='Wakamon' link='http://wackamon.lewibs.com/' info="I created Wack-A-Mon to experiment using a FSM in which the Pokemon displayed different characteristics depending on which state they were in. This allowed the code to be more streamlined and manageable. Additionally, it uses ajax to keep track of a high score list. This was implemented to make playing the game more fun." />
                    <Project image='../images/ticTacToe.PNG' title='Tic-Tac-Toe' link='https://github.com/lewibs/tic-tac-toe' info='I made this game in preparation for a job interview as a TA in Matlab. The initial plan was to make it a player versus player game, but it quickly turned into a machine learning game. Although it gets better the more it plays, It does not use AI it instead uses machine learning in which it recognizes games and patterns and learns how to handle them.' />
                    <Project image='../images/clueSheet.PNG' title='Sheet-O-Matic' link='http://cluesheet.lewibs.com/' info='This tool is extremely helpful if you no longer want people to play clue with you. It does all the logic for you as you input the moves. It can quickly determine the hidden cards by going through the move history of the game.' />
                    <Project image='../images/movieNightEtc.PNG' title='Movie Night Etc.' link='http://movienightetc.lewibs.com/' info='This is one of the most elaborate jokes that I have done. This was my intro to web development as I had to teach myself php to create it. Ultimately It came out looking much better than I had anticipated and showed me that I enjoy making websites.' />
                    <Project image='../images/wisdomDog.PNG' title='Wisdom Dog' link='http://wisdomdog.lewibs.com/' info='I made the wisdom dog to experiment with interactive websites and see how babble works.' />
                </div>
            </div>
        </section>);
}

export default Projects;