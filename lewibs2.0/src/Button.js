import './button.css'

function Button(props) {

    return (
        <a className="btn" href={props.href}>{props.text}</a>
    );
}

export default Button;