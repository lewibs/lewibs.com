import styled from "styled-components";
import React from "react";
import { colors } from "../style/colors";
import { dim } from "../style/dim";


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
            skills
        </Main>
    );
});