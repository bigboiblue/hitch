import styled from "styled-components";
import posed from "react-pose";

export const Wrapper = styled.div`
    position: absolute;
    cursor: pointer;
`;

const OuterSwitchStyle = styled.div`
    position: relative;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    width: ${(props) => `${props.theme.width}rem`};
    height: ${(props) => `${props.theme.width / 2}rem`};
    border-radius: ${(props) => `${props.theme.width / 2}rem`}; 
    margin: 0;
    padding: 0;
`;

const InnerSwitchStyle = styled.div`
    position: absolute;
    height: 85%;
    width: 42.5%;
    border-radius: ${(props) => `${props.theme.width / 2}rem`};
    background-color: ${(props) => props.theme.innerCircleColor};
    display: block;
    box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.082);
`;

export const OuterSwitch = posed(OuterSwitchStyle)({
    disabled: {
        backgroundColor: (props) => props.theme.disabledColor,
    },
    enabled: {
        backgroundColor: (props) => props.theme.enabledColor,
    },
});


export const InnerSwitch = posed(InnerSwitchStyle)({
    disabled: {
        left: "5%",
        right: "auto",
    },
    enabled: {
        left: "auto",
        right: "5%",
    },
});
