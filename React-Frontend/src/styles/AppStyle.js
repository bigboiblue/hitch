import styled from "styled-components";

export const RootContainer = styled.div` 
    display: flex;
    flex-direction: ${(props) => (props.theme.navbar.type === "vertical" ? "row" : "column")};
    height: 100%;
    width: 100%;
    position: absolute;
    align-items: flex-start;
`;

//Currently for the sake of stopping linting errors
export const temp = styled.div;
