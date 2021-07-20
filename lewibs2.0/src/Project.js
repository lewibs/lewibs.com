import "./project.css";
import Button from './Button';

function Project(props) {
    return (
        <div className='project majorGridItem'>
            <img src={props.image} height='300px;' width='300px' />
            <div className='info majorGridItem'>
                <h3 className='minorGridItem'>{props.title}</h3>
                <hr />
                <article className='minorGridItem'>{props.info}</article>
                <div className='buttons'>
                    <Button className='minorGridItem' text='Visit Here!' href={props.website} />
                    <Button className='minorGridItem' text='Source Code' href={props.source} />
                </div>
            </div>
        </div>
    );
}

export default Project;