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
import { Icon } from "../components/Icon";

const iconSize = 30;

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

    /*this is for the computer*/
    @media (min-width: ${dim.phone}) {
        justify-content: space-between;
        flex-direction: row;
    }

    /*this is for the phone*/
    @media (max-width: ${dim.phone}) {
        flex-direction: column;
        gap: ${dim.padding};
        padding-bottom: ${dim.padding};
    }
`;

const InfoSegment = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2px;
`;

const Left = styled(InfoSegment)`
    /*this is for the computer*/
    @media (min-width: ${dim.phone}) {
        text-align: left;
    }

    /*this is for the phone*/
    @media (max-width: ${dim.phone}) {
        text-align: center;
    }
`;

//this will likely cause issues on minor alignment things
const Right = styled(InfoSegment)`
    /*this is for the computer*/
    @media (min-width: ${dim.phone}) {
        text-align: right;
        align-items: end;
        position: relative;
        top: 5px;
    }

    /*this is for the phone*/
    @media (max-width: ${dim.phone}) {
        text-align: center;
    }
`;

const Name = styled.div`
    font-family: arial;
    font-weight: bold;
    font-size: ${iconSize}px;
`;

const Media = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;

    /*this is for the phone*/
    @media (max-width: ${dim.phone}) {
        justify-content: center;
    }
`;

const ContactField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Final = styled.div`
    width: 100%;
    div {
        margin-top: ${dim.padding};
    }
`;

const PointAt = styled.div`
    &:hover{
        cursor: pointer;
    }
`

const NoPhone = styled.div`
    @media(max-width: ${dim.phone}) {
        display: none;
    }
`;

function makeGoto(link) {
    return ()=>{
        window.location.href = link;
    };
}

export const Contact = React.forwardRef((props, ref) => {
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

    return (
        <Main ref={ref}>
            <BoundingBox>
                <Quote>
                    <h2><q>{quote}</q></h2>
                    <h4>- {author}</h4>
                </Quote>
                <Info>
                    <Left>
                        <Name>LEWIBS</Name>
                        <Media>
                            <PointAt><Icon type={"BsGithub"} onClick={makeGoto(github)} size={iconSize}/></PointAt>
                            <PointAt><Icon type={"BsInstagram"} onClick={makeGoto(insta)} size={iconSize} /></PointAt>
                            <PointAt><Icon type={"BsSpotify"} onClick={makeGoto(spotify)} size={iconSize} /></PointAt>
                            <PointAt><Icon type={"BsLinkedin"} onClick={makeGoto(linkedin)} size={iconSize} /></PointAt>
                        </Media>
                    </Left>
                    <Right>
                        <ContactField>{phone}<NoPhone><Icon type={"FiPhone"} size={iconSize} /></NoPhone></ContactField>
                        <ContactField>{email}<NoPhone><Icon type={"FiAtSign"} size={iconSize} /></NoPhone></ContactField>
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