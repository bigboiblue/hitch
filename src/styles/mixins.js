import { css } from "styled-components";

export const centerElement = css`
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const centerElementX = css`
    margin-left: 0;
    margin-right: 0;
    left: 50%;
    transform: translateX(-50%);
`;

export const centerElementY = css`
    margin-top: 0;
    margin-bottom: 0;
    top: 50%;
    transform: translateY(-50%);
`;
