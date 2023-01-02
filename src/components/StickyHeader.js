import styled from "styled-components";
import { colors } from "../style/colors";
import {z} from "../style/z-index";

const Head = styled.nav`
    display: flex;
    justify-content: flex-start;
    position: sticky;
    top: 0px;
    background: ${colors.tertiary};
    z-index: ${z.wayFront};
`;

export function StickyHeader({children}) {
    return <Head>{children}</Head>
}