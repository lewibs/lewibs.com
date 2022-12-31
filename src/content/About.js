import styled from "styled-components";
import React from "react";
import { colors } from "../style/colors";
import { dim } from "../style/dim";
import { z } from "../style/z-index";
import axios from "axios";
import { useEffect } from "react";
import { meta } from "../meta";
import { useState } from "react";

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

const height = "293px";

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
    height: ${height};
    width: 700px;

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
    const [about, setAbout] = useState();

    useEffect(()=>{
        axios.get(meta.about.body).then((res)=>{
            setAbout(res.data);
        })
    },[])

    return (
        <Main ref={ref}>
            <Frame container={ref}>
                <AboutMe dangerouslySetInnerHTML={{__html: about}} />
            </Frame>
        </Main>
    );
});