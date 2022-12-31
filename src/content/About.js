import styled from "styled-components";
import React from "react";
import { colors } from "../style/colors";
import { dim } from "../style/dim";
import { z } from "../style/z-index";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { meta } from "../meta";

// #aboutMe {
//     position: relative;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     max-width: 800px;
//     min-width: 150px;
//     width: 80%;
//     margin:20px auto;
// }

// #aboutMe img {
//     height: 293px;
//     /*transform: translate(0px, -30px);
//     margin-bottom: -35px;*/
// }

// #aboutMe .grid {
//     position:relative;
//     display: grid;
//     grid-template-areas: 'greeting greeting image' 'slogan slogan image' 'about about image' 'resume company image';
//     z-index: 5;
// }

// #aboutMe .gridItem {
//     margin: 10px;
// }

// #aboutMe img {
//     grid-area: image;
// }

// #aboutMe h1 {
//     grid-area: greeting;
// }

// #aboutMe h4 {
//     grid-area:slogan;
// }

// #aboutMe .resume {
//     grid-area:resume;
//     width: 100px;
// }

// #aboutMe .company {
//     grid-area:company;
//     width: 100px;
//     position: relative;
//     right: 140px;
// }

// #aboutMe .about {
//     grid-area: about;
// }

// @media (max-width:850px) {
//     #aboutMe img {
//         display: none;
//     }
// }

const Main = styled.div`
    background: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items:center;
    padding: ${dim.padding};
`;

const AboutMe = styled.div`

`;

const Frame = styled.div`
    position:relative;
    display: flex;
    z-index: ${z.front};
    height: ${props=>props.height};
    width: 800px;

    &:before {
        content: "";
        position: absolute;
        z-index: ${z.back};
        width: 100%;
        height: 100%;
        background-color: ${colors.secondary};
        transform: skewY(-13deg) rotate(8deg) translate(0%, 0%);
    }

    &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${colors.primary};
        z-index: ${z.back};
    }
`

export const About = React.forwardRef(({}, ref) => {
    const [height, setHeight] = useState("300px");

    useEffect(()=>{
        axios.get(meta.about.height).then((res)=>{
            console.log(res.data);
            setHeight(res.data.height);
        });
    },[])

    return (
        <Main ref={ref}>
            <Frame container={ref} height={height} >
                <AboutMe>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </AboutMe>
            </Frame>
        </Main>
    );
});