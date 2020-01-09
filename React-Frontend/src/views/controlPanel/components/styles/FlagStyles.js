import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    background-color: ${(props) => props.theme.backgroundColor}
`;

export const Title = styled.li`
    font: ${(props) => props.theme.font};
    color: ${(props) => props.theme.foregroundColor};
    padding: 20px;
    flex: 5;
`;

export const DateAdded = styled.li`
    font: ${(props) => props.theme.font};
    color: ${(props) => props.theme.foregroundColor};
    align-self: center;
    text-align: right;
    flex: 3;
`;

export const SwitchWrapper = styled.div`
    width: 5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const KebabMenuWrapper = styled.div`
    width: 3.5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;
