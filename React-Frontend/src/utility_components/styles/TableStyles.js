import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.width || "100%")}; /** Defined by user */
`;

export const StyledTable = styled.table`
    display: table;
    border: none;
    border-spacing: 0;
    border-radius: 0.5rem;
    overflow: hidden;
`;

export const StyledTd = styled.td`
    border: ${(props) => props.theme.border || "none"};
    background-color: ${(props) => props.theme.backgroundColor || "none"};
    color: ${(props) => props.theme.foregroundColor || "none"};
    font: ${(props) => props.theme.font || "default"};
    padding: 1rem 0;
    text-align: center;
`;


export const Title = styled.td`
    border: ${(props) => props.theme.border || "none"};
    background-color: ${(props) => props.theme.titleBackgroundColor || "none"};
    color: ${(props) => props.theme.titleForegroundColor || "none"};
    font: ${(props) => props.theme.titleFont || "default"};
    padding: 1rem 0;
    text-align: center;
`;

export const StyledTr = styled.tr`
`;
