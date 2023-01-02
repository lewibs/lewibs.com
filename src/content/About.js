import styled from "styled-components";
import React from "react";
import { colors } from "../style/colors";
import { dim } from "../style/dim";
import { z } from "../style/z-index";
import axios from "axios";
import { useEffect } from "react";
import { meta } from "../meta";
import { useState } from "react";
import { Button } from "../components/Button";
import { noMid } from "../style/hideable";
import { Title } from "../components/Title";
import { injectStyle } from "../functions/injectStyle";

const height = "300px";
const padding = "10px"

const Main = styled.div`
    background: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items:center;
    padding: ${+dim.padding.substring(0,dim.padding.length - 2) + 15 + "px"};
`;

const Frame = styled.div`
    position:relative;
    display: flex;
    z-index: ${z.front};
    height: 100%;
    width: ${dim.maxWidth};

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

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${padding};

    * {
        padding: 0;
        margin: 0;
    }
`;

const Resume = styled(Button)`
    background: ${colors.textDark};
    color: ${colors.textLight};
    width: ${dim.clickable.minWidth};
`
const AboutMe = styled.div`
    padding: ${padding};
    display:flex;

    h4 {
        margin: ${padding} 0;
        color: ${colors.tertiary}
    }
`;

let Image = styled.img`
    position: relative;
    top: -${padding};
`;

Image = injectStyle(Image, noMid);

function gotoResume() {
    window.location.href = meta.about.resume;
}

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
                <AboutMe>
                    <Text>
                        <Title>Hey, I'm Benjamin</Title>
                        <h4>I Make Stuff</h4>
                        {/*https://raw.githubusercontent.com/lewibs/lewibs.com/3.0/meta/images/05onfire1_xp-superJumbo-v2.jpg*/}
                        <div dangerouslySetInnerHTML={{__html: about}}/>
                        <Resume onClick={gotoResume}>resume</Resume>
                    </Text>
                    <Image height={height} src={meta.images.me} />
                </AboutMe>
            </Frame>
        </Main>
    );
});