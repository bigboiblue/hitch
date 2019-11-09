import styled from "styled-components";
import posed from "react-pose";

export const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 1rem;
`;

export const Title = styled.h2`
    justify-self: flex-start;
    font: 300 0.9rem 'Work Sans', sans-serif;
    color: grey;
`;

export const InputBox = styled.input`
    justify-self: flex-end;
    margin-left: 1rem;
    width: 25rem;
    outline: none;
    border-radius: 0.5rem;
    border: 1px solid rgba(0,0,0,0.3);
    font: 300 0.9rem 'Work Sans', sans-serif;
`;
