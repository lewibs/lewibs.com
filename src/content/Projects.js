import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { colors } from "../style/colors";
import { dim } from "../style/dim";
import Carousel from 'react-material-ui-carousel'
import axios from "axios";
import { meta } from "../meta";
import { BoundingBox } from "../components/BoundingBox";
import { useRef } from "react";

const PageHeight = 200;

const Main = styled.div`
    background: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${dim.padding};
`;

const Frame = styled.div`
    display: flex;
`;

const About = styled.div`
    text-align: left;
    padding: 10px 0px 10px 10px;
`;

const Title = styled.div`
    text-align:center;
    font-weight: bold;
    font-size: 1.3em;
    padding-bottom: 5px;
`;

const Bod = styled.div``;

const Img = styled.img`
    background: white;
`;

const ImgR = styled(Img)`clip-path: polygon(0% 100%, 100% 100%, 100% 0);`;
const ImgL = styled(Img)`clip-path: polygon(0 0, 0 100%, 100% 0);`;

function Project({title, image, info, link}) {
    const that = useRef();
    const [height, setHeight] = useState(PageHeight);


    useEffect(()=>{
        setHeight(that.current.clientHeight);
    },[that]);

    return(
        <Frame ref={that}>
            <ImgL height={height + "px"} src={image}/>
            <About>
                <Title>
                    {title}
                </Title>
                <Bod>
                    {info}
                </Bod>
            </About>
            <ImgR height={height + "px"} src={image}/>
        </Frame>
    );
}

export const Projects = React.forwardRef(({}, ref) => {
    const [projects, setProjects] = useState([]);
    const pageRef = useRef();

    useEffect(()=>{
        axios.get(meta.projects).then((res)=>{
            setProjects(res.data);
        })
    },[]);

    return (
        <Main ref={ref}>
            <BoundingBox>
                <Carousel
                    sx={{
                        width: "100%",
                        maxWidth: dim.maxWidth,
                    }}
                    cycleNavigation
                    height={PageHeight}
                >
                    {projects.map((project,i)=><Project
                        key={i}
                        title={project.title}
                        image={project.image}
                        info={project.info}
                        link={project.info}
                    />)}
                </Carousel>
            </BoundingBox>
        </Main>
    );
});