import '../css/skills.css';

function Skills() {
    return (
        <section id='skills' className='background4 color1 section'>
            <h2>Skills and Expertise</h2>

            <div id="skillbar">
                <span className='skill'>
                    <i className="fa fa-code"></i>
                    <h4>Web/App Development</h4>
                    <div>React, axios, potree, three.js, IFC.js, potree, nativescript jquery, styled-components, html/css</div>
                </span>

                <span className='skill'>
                    <i className="fa fa-tv color1"></i>
                    <h4>Software Development</h4>
                    <div>AWS, cPanel, Spring, eclipse, linux, mongoDB, gin, node, OOP, functional, SQL, Spring, Hibernate</div>
                </span>

                <span className='skill'>
                    <i className="fa fa-pencil"></i>
                    <h4>Languages</h4>
                    <div>javascript, typescript, golang, python, java, c, assembly, shell, MATLAB, haskell, php</div>
                </span>
            </div>
        </section>  
    );
};

export default Skills;
