import styled from "styled-components";
import React from "react";
import { colors } from "../style/colors";
import { dim } from "../style/dim";


const Main = styled.div`
    background: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items:center;
    padding: ${dim.padding};
`;

export const Projects = React.forwardRef(({}, ref) => {
    return (
        <Main ref={ref}>
            Projects
        </Main>
    );
});