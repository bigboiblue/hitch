import styled from "styled-components";

export const Wrapper = styled.div`
    display: block;
    position: relative;
    flex: 1;
    background-color: ${(props) => props.theme.backgroundColor};
    padding: 0.25rem 1.25rem 0.25rem 1.25rem;
    height: 100%;
    width: 100%;
`;

export const TitleContainer = styled.div`
    display: block;
    position: relative;

    p {
        font-size: ${(props) => `${props.theme.fontSize}rem`};
        font-family: ${(props) => props.theme.fontFamily};
        color: ${(props) => props.theme.foregroundColor};
        text-align: center
    }
`;
