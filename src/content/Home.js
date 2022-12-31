import styled from "styled-components";
import Me from "../3d/Me";
import {z} from "../style/z-index";

const Main = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: ${z.wayBack};
`;

export function Home() {
    return <Main><Me/></Main>
}