import styled from "styled-components";

export const RootContainer = styled.div` 
    display: flex;
    flex-direction: ${(props) => (props.theme.navbar.type === "vertical" ? "row" : "column")};
    height: 100%;
    width: 100%;
    position: absolute;
    align-items: flex-start;
`;

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
`;
