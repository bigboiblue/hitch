import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    width: 100%;
    background: red;
    padding: 0;
    margin: 0;
`;

export const Title = styled.h1`
    font: 500 1rem 'Work Sans', sans-serif;
    padding: 0.75rem;
    background: #dddddd;
    width: 100%;
    text-align: center;
    margin: 0;
    cursor: pointer;

    ::selection {
        background: transparent;
    }
`;

export const Item = styled.div`
    font: 300 0.9rem 'Work Sans', sans-serif;
    padding: 0.5rem;
    background: #efefef;
    width: 100%;
    text-align: center;
    margin: 0;
    cursor: pointer;


    ::selection {
        background: transparent;
    }
`;
