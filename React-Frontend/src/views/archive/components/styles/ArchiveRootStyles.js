import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
    margin: 0;
    text-transform:capitalize;
    text-align: center;
    font: ${(props) => props.theme.titleFont};
    color: ${(props) => props.theme.foregroundColor};
    padding: 30px;
`;

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 40%;
`;

export const Button = styled.button`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.foregroundColor};
    padding: ${(props) => props.theme.padding};
    border: none;
    border-radius: 0.25rem;
    outline: none;
    cursor: pointer;
`;
