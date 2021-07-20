import "./project.css"

function Project(props) {
    return (
        <div className='project'>
            <img src={props.image} height='300px;' width='300px' />
            <div class='info'>
                <h3>{props.title}</h3>
                <div>{props.info}</div>
                <a href={props.website}>Visit Here!</a>
                <a href={props.source}>Source Code</a>
            </div>
        </div>
    );
}

export default Project;