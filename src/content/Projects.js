import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { colors } from "../style/colors";
import { dim } from "../style/dim";
import Carousel from 'react-material-ui-carousel'
import axios from "axios";
import { meta } from "../meta";
import { BoundingBox } from "../components/BoundingBox";

const PageHeight = 150;

const Main = styled.div`
    background: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${dim.padding};
`;

const Frame = styled.div`
    
`;

const Img = styled.img`
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
`;

function Project({title, image, info, link}) {
    return(
        <Frame>
            <div>
                {title}
            </div>
            <div>
                {info}
            </div>
            <Img height={PageHeight + "px"} src={image}/>
        </Frame>
    );
}

export const Projects = React.forwardRef(({}, ref) => {
    const [projects, setProjects] = useState([]);

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
                    {projects.map(project=><Project 
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