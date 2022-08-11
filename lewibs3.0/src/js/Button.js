import '../css/button.css'

export function Button(props) {

    return (
        <a className={props.className + " btn"} href={props.href}>{props.text}</a>
    );
}

export default Button;