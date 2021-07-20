import './projects.css';
import Project from './Project';

function Projects() {
    return (
        <section id='projects'>
            <h2>Projects</h2>

            <Project image='../images/wackamon.PNG' title='Wakamon' info='I made this game to practice using a finite state machine in which each wackamon hole does an action based on the state that it is in. This was written in vanilla javascript with the exception of ajax for keeping track of user scores on the high score chart.' website='http://wackamon.lewibs.com/' source='https://github.com/lewibs/wack_a_mon' />
            <Project image='../images/wisdomDog.PNG' title='Wisdom Dog' />
            <Project image='../images/clueSheet.PNG' title='Sheet-O-Matic' />
            <Project image='../images/movieNightEtc.PNG' title='Movie Night Etc.' />
            <Project image='../images/ticTacToe.PNG' title='Tic-Tac-Toe' />

        </section>);
}

export default Projects;