import styled from "styled-components";
import posed from "react-pose";
import { parseCssCalc } from "../../utilityFunctions";
import { centerElement } from "../../styles/mixins";


export const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    height: ${(props) => props.height || "2rem"};
    width: ${(props) => parseCssCalc(`${props.height} * 0.75`, "1.5rem")};
    padding: ${(props) => parseCssCalc(`${props.height} / 8`, "0.25rem")};

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
    height: ${(props) => parseCssCalc(`${props.height} / 8`, "0.25rem")};
    width: ${(props) => parseCssCalc(`${props.height} / 8`, "0.25rem")};
    border-radius: ${(props) => parseCssCalc(`${props.height} / 16`, "0.125rem")};
    background-color: ${(props) => props.color || "rgb(88, 88, 88)"};
`;


export const AnimatedDot = posed(Dot)({
    menuDisabled: {
        transform: "scale(1, 1)",
    },
    menuEnabled: {
        transform: "scale(5.5, 5.5)",
    },
});

