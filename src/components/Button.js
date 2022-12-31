import styled from "styled-components";
import { colors } from "../style/colors";
import {dim} from "../style/dim";

export const Button = styled.button`
    background : ${props=>props.background||colors.tertiary};
    border: 1px solid ${colors.tertiaryDark};

    min-height: ${dim.clickable.minHeight};
    min-width: ${dim.clickable.minWidth};

    color: ${props=>props.color||colors.textLight};
    
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor:pointer;
        filter: brightness(80%);
    }
`;