import styled, { keyframes } from 'styled-components'
import React, { useEffect, useState } from "react";
import { colors } from "../style/colors";
import { dim } from "../style/dim";
import Carousel from 'react-material-ui-carousel'
import axios from "axios";
import { meta } from "../meta";
import { BoundingBox } from "../components/BoundingBox";
import { useRef } from "react";
import {Title} from "../components/Title";
import {z} from "../style/z-index";

const PageHeight = 250;
const ButtonHeight = 25;
const animationDist = window.innerWidth;
const imgAnimation = "0.6s 1 ease-in forwards";
const aboutAnimation = "0.2s 1 forwards";

const Main = styled.div`
    background: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${dim.padding};
`;

const Frame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${isPhone() ? 0 : "100px"};
    height: ${props=>props.height};

    ${({clickable})=>{
        if (clickable) {
            return `cursor: pointer;`
        }
    }}
`;

const aboutFrame = keyframes`
    from {
        clip-path: inset(0 100%);
    }
    to {
        clip-path: inset(0 0);
    }
`;

const About = styled.div`
    width: 100%;
    max-width: ${dim.maxWidth};
    text-align: left;
    display:flex;
    flex-direction: column;
    gap: 10px;

    clip-path: inset(0 100%);
    animation: ${aboutFrame} ${aboutAnimation};
    -webkit-animation: ${aboutFrame} ${aboutAnimation};
    -moz-animation: ${aboutFrame} ${aboutAnimation};
    -o-animation: ${aboutFrame} ${aboutAnimation};
`;

const More = styled.div`
    cursor: pointer;
    color: ${colors.tertiaryDark};

`;

const ProjectTitle = styled.div`
    font-weight: bold;
    font-size: 1.3em;
    padding: 5px 0;
`;

const ImgC = styled.div`
    position: absolute;
`;

const Img = styled.img`
    position: relative;
    background: ${colors.primary};
    z-index: ${z.front};
`;

const ImgR = styled(Img)`
    clip-path: polygon(0% 100%, 100% 100%, 100% 0);
    animation: ${slideFrame("right", 0, animationDist)} ${imgAnimation};
    -webkit-animation: ${slideFrame("right", 0, animationDist)} ${imgAnimation};
    -moz-animation: ${slideFrame("right", 0, animationDist)} ${imgAnimation};
    -o-animation: ${slideFrame("right", 0, animationDist)} ${imgAnimation};
`;

const ImgL = styled(Img)`
    clip-path: polygon(0 0, 0 100%, 100% 0);
    -webkit-animation: ${slideFrame("left", 0, animationDist)} ${imgAnimation};
    -moz-animation: ${slideFrame("left", 0, animationDist)} ${imgAnimation};
    -o-animation: ${slideFrame("left", 0, animationDist)} ${imgAnimation};
`

function isPhone() {
    return window.innerWidth <= +dim.phone.replace("px", "")
}

function slideFrame(dir, from, to) {
    let trans = to;

    if (dir==="left") {
        trans = "-" + to + "px";
    } else if (dir==="right") {
        trans = to + "px";
    }

    return keyframes`
        from {
            transform: translate(${from}px);
        }

        to {
            transform: translate(${trans});
        }
    `;
}

function Project({title, image, info, link, last, id}) {
    const frameRef = useRef();
    const aboutRef = useRef();
    const imgRef = useRef();
    const [height, setHeight] = useState(PageHeight);
    const [imw, setImw] = useState(0);
    const [hover, setHover] = useState(false);

    useEffect(()=>{
        if (frameRef.current) {
            setHeight(frameRef.current.clientHeight - ButtonHeight);    
        }
    },[frameRef]);

    useEffect(()=>{
        if (!hover) {
            setImw(imgRef.current.clientWidth);
        }
    },[imgRef]);

    useEffect(()=>{
        if (id === last) {
            triggerClose();
        }
    }, [id, last])

    function triggerSlide() {
        setHover(true);
    }

    function triggerClose() {
        setHover(false);
    }

    function attachActions(hover) {
        if (hover) {
            return {
                onClick: triggerSlide,
                onMouseLeave: triggerClose
            }
        } else {
            return {
                onClick: triggerSlide,
                onMouseEnter: triggerSlide
            }
        }
    }

    return(
        <div>
            {(hover)
                ?<>
                    <Frame 
                        clickable={false}
                        ref={frameRef}
                        height={height + "px"}
                    >
                        <ImgC>
                            <ImgL
                                translate={imw}
                                height={height + "px"}
                                src={image}
                            />
                        </ImgC>
                        <About
                            ref={aboutRef}
                        >
                            <ProjectTitle>{title}</ProjectTitle>
                            {info}
                            <More 
                                onClick={()=>window.location.href = link}
                            >
                                click for more &#xbb;
                            </More>
                        </About>
                        <ImgC>
                            <ImgR
                                translate={imw}
                                height={height + "px"}
                                src={image}
                            />
                        </ImgC>
                    </Frame>
                </>
                :<>
                    <Frame 
                        clickable={true}
                        ref={frameRef}
                        height={height + "px"}
                    >
                        <Img 
                            ref={imgRef}
                            imw={imw}
                            height={height + "px"}
                            src={image}
                            {...attachActions(hover)}
                        />
                    </Frame>
                    <ProjectTitle>{title}</ProjectTitle>
                </>
            }
        </div>
    );
}

export const Projects = React.forwardRef(({}, ref) => {
    const [projects, setProjects] = useState([]);
    //const [current, setCurrent] = useState();
    const [last, setLast] = useState();

    useEffect(()=>{
        axios.get(meta.projects).then((res)=>{
            setProjects(res.data);
        })
    },[]);

    function handleChange(current, last) {
        //setCurrent(current);
        setLast(last);
    }

    return (
        <Main ref={ref}>
            <BoundingBox>
                <Title>Projects</Title>
                <Carousel
                    sx={{
                        width: "100%",
                        maxWidth: dim.maxWidth,
                    }}
                    cycleNavigation
                    stopAutoPlayOnHover
                    swipe
                    navButtonsAlwaysVisible={!isPhone()}
                    animation={"slide"}
                    interval={6000}
                    height={PageHeight}
                    onChange={handleChange}
                >
                    {projects.map((project,i)=><Project
                        id={i}
                        last={last}
                        key={i}
                        title={project.title}
                        image={project.image}
                        info={project.info}
                        link={project.link}
                    />)}
                </Carousel>
            </BoundingBox>
        </Main>
    );
});