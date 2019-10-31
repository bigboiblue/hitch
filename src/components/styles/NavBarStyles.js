import styled from "styled-components";

export const Spacer = styled.div`
    flex: 1;
`;

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: ${(props) => (props.type === "vertical" ? "column" : "row")};
    background-color: #d6d28b;
    height: ${(props) => (props.type === "vertical" ? "100vh" : `${props.size}rem`)};
    width: ${(props) => (props.type === "horizontal" ? "100vw" : `${props.size}rem`)};
    position: fixed;
`;

export const MenuItemContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
`;
