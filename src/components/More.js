import styled from "styled-components";

const DropRef = styled.div`
    position: absolute;
    top: 75vh;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: inline-block;
    color: black;
    font : normal 400 20px/1 'Josefin Sans', sans-serif;
    font-weight: bold;
    letter-spacing: .1em;
    text-decoration: none;
    transition: opacity .3s;
    padding-top: 70px;

    &:hover{
        opacity: .5;
        cursor: pointer;
    }

    span {
        position: absolute;
        top: -20px;
        left: 30%;
        width: 50px;
        height: 50px;
        margin-left: -12px;
        border-left: 10px solid black;
        border-bottom: 10px solid black;
        -webkit-transform: rotateZ(-45deg);
        transform: rotateZ(-45deg);
        -webkit-animation: sdb06 1.5s infinite;
        animation: sdb06 1.5s infinite;
        box-sizing: border-box;
    }

    @-webkit-keyframes sdb06 {
        0% {
          -webkit-transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          -webkit-transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
          opacity: 0;
        }
      }
      @keyframes sdb06 {
        0% {
          transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
          opacity: 0;
        }
      }
`;



export function More({onClick}) {
    return(
            <DropRef>
                <a onClick={onClick}><span></span>MORE</a>
            </DropRef>
    );
}