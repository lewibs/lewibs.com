import styled from "styled-components";
import { colors } from "../style/colors";

const Head = styled.nav`
    display: flex;
    justify-content: flex-start;
    position: sticky;
    top: 0px;
    background: ${colors.tertiary}; 
`;

export function StickyHeader({children}) {
    return <Head>{children}</Head>
}