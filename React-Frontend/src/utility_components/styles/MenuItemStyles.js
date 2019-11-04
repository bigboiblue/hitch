import styled from "styled-components";
import posed from "react-pose";

const WrapperCore = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    padding: ${(props) => props.theme.padding};
    margin: 0;
    line-height: auto;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const Wrapper = posed(WrapperCore)({
    hoverable: true,
    init: {
        backgroundColor: (props) => props.theme.backgroundColor,
    },
    hover: {
        backgroundColor: (props) => props.theme.hover.backgroundColor,
    },

});

export const TitleContainer = styled.div`
    display: block;
    position: relative;

    p {
        font: ${(props) => props.theme.font};
        color: ${(props) => props.theme.foregroundColor};
        text-align: center;
    }
`;
