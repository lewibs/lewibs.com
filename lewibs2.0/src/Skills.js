import './skills.css';

function Skills() {
    return (
        <section id='skills'>
            <h2>Skills and Expertise</h2>

            <span className='skill'>
                <i className="fa fa-code"></i>
                <h4>Web Development</h4>
                <div>PHP, jQuery, React, Javascript, HTML5, CSS3</div>
            </span>

            <span className='skill'>
                <i className="fa fa-tv"></i>
                <h4>Software Development</h4>
                <div>Java, Python, MATLAB</div>
            </span >

            <span className='skill'>
                <i className="fa fa-pencil"></i>
                <h4>Manufacturing</h4>
                <div>Solidworks, Landscaping, Hardscaping, Handyman</div>
            </span>
        </section>  
    );
};

export default Skills;
