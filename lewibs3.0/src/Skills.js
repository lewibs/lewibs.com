import './skills.css';

function Skills() {
    return (
        <section id='skills' className='background4 color1 section'>
            <h2>Skills and Expertise</h2>

            <span className='skill'>
                <i className="fa fa-code"></i>
                <h4>Web Development</h4>
                <div>React, threejs, jquery, html/css</div>
            </span>

            <span className='skill'>
                <i className="fa fa-tv color1"></i>
                <h4>Software Development</h4>
                <div>AWS, cPanel, Spring, Django, eclipse, linux, mongoDB</div>
            </span >

            <span className='skill'>
                <i className="fa fa-pencil"></i>
                <h4>Languages</h4>
                <div>python, javascript, php, java, c, assembly, bash, MATLAB</div>
            </span>
        </section>  
    );
};

export default Skills;
