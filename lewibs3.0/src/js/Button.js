import '../css/button.css'

function Button(props) {

    return (
        <a className={props.className + " btn"} href={props.href}>{props.text}</a>
    );
}

export default Button;