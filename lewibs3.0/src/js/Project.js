import "../css/project.css";
import Button from './Button';

function Project(props) {
    return (
        <div className={props.className}>
            <div className='project'>
                <img src={props.image} width='250px' height='250px' />
                <div className='info majorGridItem color1'>
                    <h3 className='minorGridItem'>{props.title}</h3>
                    <hr />
                    <article className='minorGridItem'>{props.info}</article>
                    <div className='buttons'>
                        <Button className='background1 color1' text='Visit' href={props.link} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;