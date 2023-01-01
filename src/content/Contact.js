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
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    text-align: left;
`;

const Right = styled.div`
    text-align: right;
`;

const Name = styled.div`
`;

const Media = styled.div`
`;

const ContactField = styled.div``;

const Final = styled.div`
    width: 100%;
    div {
        margin-top: ${dim.padding};
    }
`;

export const Contact = React.forwardRef(({}, ref) => {
    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [insta, setInsta] = useState();
    const [github, setGithub] = useState();
    const [spotify, setSpotify] = useState();
    const [linkedin, setLinkedin] = useState();

    useEffect(()=>{
        axios.get(meta.quote).then((res)=>{
            let data = getRandom(res.data);
            setQuote(data.quote);
            setAuthor(data.author);
        });

        axios.get(meta.contact).then((res)=>{
            setPhone(res.data.phone);
            setEmail(res.data.email);
            setInsta(res.data.insta);
            setGithub(res.data.github);
            setSpotify(res.data.spotify);
            setLinkedin(res.data.linkedin);
        })
    },[]);

    console.log(phone,email,insta,github,spotify,linkedin);

    return (
        <Main ref={ref}>
            <BoundingBox>
                <Quote>
                    <h2><q>{quote}</q></h2>
                    <h4>- {author}</h4>
                </Quote>
                <Info>
                    <Left>
                        <Name>BENJAMIN</Name>
                        <Media>
                            asdf
                        </Media>
                    </Left>
                    <Right>
                        <ContactField>phone</ContactField>
                        <ContactField>email</ContactField>
                    </Right>
                </Info>
                <Final>
                    <hr/>
                    <div>
                        ok you can go now
                    </div>
                </Final>
            </BoundingBox>
        </Main>
    );
});