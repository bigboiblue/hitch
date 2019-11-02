import styled from "styled-components";

export const BoxTitle = styled.h1`
        background-color: ${(props) => props.theme.titleBackgroundColor};
        text-align: center;
        color: ${(props) => props.theme.titleForegroundColor};
        padding: 20px;
        font-size: ${(props) => `${props.theme.titleFontSize}rem`};
        font-family: ${(props) => props.theme.titleFontFamily};
        border-radius: 0.25rem;
        margin: 0 0 0.5rem 0;
`;

export const Container = styled.div`
    position: relative;
    padding: 20px;
    border-radius: 0.25rem;
    background-color: ${(props) => props.theme.backgroundColor};
    margin-bottom: 30px;
`;

export const List = styled.ul`
    list-style: none;
    position: relative;
    padding-left: 0;
    margin: 0;
`;
