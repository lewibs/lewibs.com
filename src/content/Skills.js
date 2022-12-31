import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { colors } from "../style/colors";
import { dim } from "../style/dim";
import { Title } from "../components/Title";
import {Icon} from "../components/Icon";
import axios from "axios";
import {meta} from "../meta";

const Main = styled.div`
    background: ${colors.secondary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    color: ${colors.textLight};
    padding: ${dim.padding} 0;
`;

const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${dim.padding};
    width: 100%;
    flex-wrap: wrap;
`;

const About = styled.div`
    width : 100px;
    text-align: text-top;
`;

const SkillMain = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const SkillTitle = styled.div`

`;

function Skill({icon, title, body}) {
    return (
        <SkillMain>
            {icon}
            <SkillTitle>{title}</SkillTitle>
            <About>{body}</About>
        </SkillMain>
    );
}

export const Skills = React.forwardRef(({}, ref) => {
    const [web, setWeb] = useState();
    const [backend, setBackend] = useState();
    const [languages, setLanguages] = useState();

    useEffect(()=>{
        axios.get(meta.skills.web).then((res)=>{
            setWeb(res.data);
        });

        axios.get(meta.skills.backend).then((res)=>{
            setBackend(res.data);
        });

        axios.get(meta.skills.languages).then((res)=>{
            setLanguages(res.data);
        });
    }, []);


    return (
        <Main ref={ref}>
            <Title>Skills and Expertise</Title>
            <List>
                <Skill 
                    icon={<Icon type={"VscCode"}/>}
                    title = "Web/App"
                    body = {web}
                />
                <Skill 
                    icon={<Icon type={"FiTerminal"}/>}
                    title = "Backend"
                    body = {backend}
                />
                <Skill 
                    icon={<Icon type={"FiMessageSquare"}/>}
                    title = "Languages"
                    body = {languages}
                />
            </List>
        </Main>
    );
});


{/* <div id="skillbar">
                <span className='skill'>
                    <Icon type={"FiTerminal"}/>
                    <h4>Web/App Development</h4>
                    <div>React, axios, potree, three.js, IFC.js, potree, nativescript jquery, styled-components, html/css</div>
                </span>

                <span className='skill'>
                    <i className="fa fa-tv color1"></i>
                    <h4>Software Development</h4>
                    <div>AWS, cPanel, Spring, eclipse, Mongoose, Nestjs, linux, mongoDB, gin, node, OOP, functional, SQL, Spring, Hibernate</div>
                </span>

                <span className='skill'>
                    <i className="fa fa-pencil"></i>
                    <h4>Languages</h4>
                    <div>javascript, typescript, golang, python, java, c, assembly, shell, MATLAB, haskell, php</div>
                </span>
            </div> */}