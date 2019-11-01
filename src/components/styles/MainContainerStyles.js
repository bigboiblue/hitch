import styled from "styled-components";

export const Container = styled.div`
    position: relative;
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
    padding: 30px;
`;

export const FlagBoxContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 60%;
`;
