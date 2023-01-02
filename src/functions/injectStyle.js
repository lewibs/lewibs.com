import styled from "styled-components";

export function injectStyle(component, style) {
    return styled(component)`
        ${style}
    `;
}