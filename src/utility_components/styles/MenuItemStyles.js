import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex: 1;
    background-color: ${(props) => props.theme.backgroundColor};
    padding: ${(props) => props.theme.padding};
    margin: 0;
    line-height: 0;
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
        text-align: center;
    }
`;
