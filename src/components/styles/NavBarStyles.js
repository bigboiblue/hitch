import styled from "styled-components";

export const Spacer = styled.div`
    flex: 1;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.theme.type === "vertical" ? "column" : "row")};
    background-color: ${(props) => props.theme.backgroundColor};
    height: ${(props) => (props.theme.type === "vertical" ? "100vh" : `${props.size}rem`)};
    width: ${(props) => (props.theme.Containertype === "horizontal" ? "100vw" : `${props.size}rem`)};
    position: relative;
`;

export const MenuItemContainer = styled.div`
    flex: 1;
    display: flex;
    padding: ${(props) => `${props.theme.padding}rem`};
    width: 100%;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
`;
