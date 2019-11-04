import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    background-color: ${(props) => props.theme.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
`;

export const Title = styled.h1`
    margin: 0;
    text-transform:capitalize;
    text-align: center;
    font: ${(props) => props.theme.titleFont};
    color: ${(props) => props.theme.foregroundColor};
    padding: 30px;
`;

export const FlagBoxContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 40%;
`;
