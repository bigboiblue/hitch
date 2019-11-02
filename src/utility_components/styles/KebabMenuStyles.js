import styled from "styled-components";
import posed from "react-pose";
import { parseCssCalc } from "../../utilityFunctions";
import { centerElement } from "../../styles/mixins";


export const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    height: ${(props) => `${props.theme.height}rem`};
    width: ${(props) => `${props.theme.height * 0.75}rem`};
    padding: ${(props) => `${props.theme.height / 8}rem`};

`;

export const DotWrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Dot = styled.div`
    position: absolute;
    height: ${(props) => `${props.theme.height / 8}rem`};
    width: ${(props) => `${props.theme.height / 8}rem`};
    border-radius: ${(props) => `${props.theme.height / 16}rem`};
    background-color: ${(props) => props.theme.color};
`;


export const AnimatedDot = posed(Dot)({
    menuDisabled: {
        transform: (props) => `scale(${props.theme.middleDotSize}`,
    },
    menuHover: {
        transform: (props) => `scale(${props.theme.hover.middleDotSize}`,
    },
    menuEnabled: {
        transform: (props) => `scale(${props.theme.click.middleDotSize}`,
    },
});

