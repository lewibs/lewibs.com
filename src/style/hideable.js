import { dim } from "./dim"

export function noDim(max) {
    return `
        @media (max-width:${max}) {
            display: none;
        }
    `
}

export const noPhone = noDim(dim.phone);

export const noMid = noDim(dim.mid);
