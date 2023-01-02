import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { colors } from "../style/colors";
import { dim } from "../style/dim";
import { Title } from "../components/Title";
import {Icon} from "../components/Icon";
import axios from "axios";
import {meta} from "../meta";
import { BoundingBox } from "../components/BoundingBox";

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
    justify-content: space-around;
    align-items: flex-start;
    gap: ${dim.padding};
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
`;


const SkillMain = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    gap: 10px;

    * {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;


function Skill({icon, title, body=[]}) {
    const [list, setList] = useState([]);

    useEffect(()=>{
        setList(body.reduce((a,b)=>a+", "+b, "").substring(2))
    },[body])


    return (
        <SkillMain>
            <div>{icon}</div>
            <b>{title}</b>
            <div>{list}</div>
        </SkillMain>
    );
}

export const Skills = React.forwardRef(({}, ref) => {
    const [web, setWeb] = useState();
    const [backend, setBackend] = useState();
    const [languages, setLanguages] = useState();

    useEffect(()=>{
        axios.get(meta.skills).then((res)=>{
            setWeb(res.data.web);
            setBackend(res.data.backend);
            setLanguages(res.data.languages);
        });
    }, []);


    return (
        <Main ref={ref}>
            <BoundingBox>
                <Title>Skills and Expertise</Title>
                <List>
                    <Skill 
                        icon={<Icon type={"VscCode"}/>}
                        title = "Web/App"
                        body = {web}
                    />
                    <Skill 
                        icon={<Icon type={"FiMonitor"}/>}
                        title = "Backend"
                        body = {backend}
                    />
                    <Skill 
                        icon={<Icon type={"FiMessageSquare"}/>}
                        title = "Languages"
                        body = {languages}
                    />
                </List>
            </BoundingBox>
        </Main>
    );
});