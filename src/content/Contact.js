import styled from "styled-components";
import React from "react";
import { colors } from "../style/colors";
import { dim } from "../style/dim";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { meta } from "../meta";
import { getRandom } from "../functions/array";
import { BoundingBox } from "../components/BoundingBox";

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
    width: 100%;
`;

export const Contact = React.forwardRef(({}, ref) => {
    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();

    useEffect(()=>{
        axios.get(meta.quote).then((res)=>{
            let data = getRandom(res.data);
            setQuote(data.quote);
            setAuthor(data.author);
        });
    },[]);

    return (
        <Main ref={ref}>
            <BoundingBox>
                <Quote>
                    <h2><q>{quote}</q></h2>
                    <h4>- {author}</h4>
                </Quote>
                <Info>asdf</Info>
                <Final>
                    <hr/>
                    asdf
                </Final>
            </BoundingBox>
        </Main>
    );
});