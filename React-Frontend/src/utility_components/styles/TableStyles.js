import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.width || "100%")}; /** Defined by user */
    padding-top: 2rem;
`;

export const StyledTable = styled.table`
    display: table;
    border: 2px solid black;
    border-spacing: 0;
`;

export const StyledTd = styled.td`
    border: 1px solid grey;
    padding: 1rem 0;
    text-align: center;
`;

export const StyledTr = styled.tr`
`;
