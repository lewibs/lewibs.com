import styled from "styled-components";
import React from "react";
import { colors } from "../style/colors";
import { dim } from "../style/dim";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const Main = styled.div`
    background: ${colors.tertiary};
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    color: ${colors.textLight};
    padding: ${dim.padding};
`;

const Quote = styled.div`
    text-align: center;
`;

const Info = styled.div`
`;

const Final = styled.div`
`;

export const Contact = React.forwardRef(({}, ref) => {
    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();

    useEffect(()=>{
        axios.get();
    },[]);

    return (
        <Main ref={ref}>
            <Quote>
                <h2><q>It is possible to commit no mistakes and still lose. That is not weakness, that is life.</q></h2>
                <h4>- Jean-Luc Picard</h4>
            </Quote>
            <Info>asdf</Info>
            <Final>asdf</Final>
        </Main>
    );
});