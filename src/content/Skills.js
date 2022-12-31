import styled from "styled-components";
import React from "react";
import { colors } from "../style/colors";
import { dim } from "../style/dim";
import { Title } from "../components/Title";
import {Icon} from "../components/Icon";

const Main = styled.div`
    background: ${colors.secondary};
    display: flex;
    justify-content: center;
    align-items:center;
    color: ${colors.textLight};
    padding: ${dim.padding};
`;

export const Skills = React.forwardRef(({}, ref) => {
    return (
        <Main ref={ref}>
            <Title>Skills and Expertise</Title>

            <div id="skillbar">
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
            </div>
        </Main>
    );
});