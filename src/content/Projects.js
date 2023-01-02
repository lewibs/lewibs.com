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

const PageHeight = 250;
const ButtonHeight = 25;
const animationDist = window.innerWidth;
const animation = "0.5s 1 ease-in forwards";

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
    padding: 0 ${isPhone() ? 0 : "100px"};

    ${({clickable})=>{
        if (clickable) {
            return `cursor: pointer;`
        }
    }}
`;

const About = styled.div`
    width: 100%;
    max-width: ${dim.maxWidth};
    text-align: left;
`;

const ProjectTitle = styled.div`
    text-align:center;
    font-weight: bold;
    font-size: 1.3em;
    padding-bottom: 5px;
`;

const ImgC = styled.div`
    position: absolute;
`;

const Img = styled.img`
    position: relative;
    background: white;
`;

function isPhone() {
    return window.innerWidth <= +dim.phone.replace("px", "")
}

function keyframe(dir, dist) {
    let trans = dist;

    if (dir==="left") {
        trans = "-" + dist + "px";
    } else if (dir==="right") {
        trans = dist + "px";
    }

    return keyframes`
        from {
            transform: translate(0px);
        }

        to {
            transform: translate(${trans});
        }
    `;
}

const ImgR = styled(Img)`
    clip-path: polygon(0% 100%, 100% 100%, 100% 0);

    animation: ${keyframe("right", animationDist)} ${animation};
`;

const ImgL = styled(Img)`
    clip-path: polygon(0 0, 0 100%, 100% 0);
    animation: ${keyframe("left", animationDist)} ${animation};
`;

function Project({title, image, info, date, link, last, id}) {
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
            <ProjectTitle>
                {title} {date}
            </ProjectTitle>
            {(hover)
                ?<>
                    <Frame 
                        clickable={false}
                        ref={frameRef}
                        {...attachActions(hover)}
                    >
                        <ImgC>
                            <ImgL
                                height={height + "px"}
                                src={image}
                            />
                        </ImgC>
                        <About
                            ref={aboutRef}
                        >
                            {info}
                        </About>
                        <ImgC>
                            <ImgR
                                height={height + "px"}
                                src={image}
                            />
                        </ImgC>
                    </Frame>
                </>
                :<Frame 
                    clickable={true}
                    ref={frameRef}
                >
                    <Img 
                        ref={imgRef}
                        imw={imw}
                        height={height + "px"}
                        src={image}
                        {...attachActions(hover)}
                    />
                </Frame>
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
                        date={project.date}
                        image={project.image}
                        info={project.info}
                        link={project.info}
                    />)}
                </Carousel>
            </BoundingBox>
        </Main>
    );
});