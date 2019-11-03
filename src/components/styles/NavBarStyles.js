import styled from "styled-components";

export const Spacer = styled.div`
    flex: 1;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.theme.type === "vertical" ? "column" : "row")};
    background-color: ${(props) => props.theme.backgroundColor};
    height: ${(props) => (props.theme.type === "vertical" ? "100%" : `${props.theme.size}rem`)};
    width: ${(props) => (props.theme.type === "horizontal" ? "100%" : `${props.theme.size}rem`)};
    position: relative;
`;

export const MenuItemContainer = styled.div`
    flex: 1;
    display: flex;
    padding: ${(props) => `${props.theme.padding}rem`};
    flex-direction: ${(props) => (props.theme.type === "vertical" ? "column" : "row")};;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
