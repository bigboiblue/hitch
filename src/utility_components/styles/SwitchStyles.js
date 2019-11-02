import styled from "styled-components";
import posed from "react-pose";

export const Wrapper = styled.div`
    position: absolute;
`;

const OuterSwitchStyle = styled.div`
    position: relative;
    display:flex;
    align-items: center;
    width: ${(props) => `${props.theme.width}rem` || "3rem"};
    height: ${(props) => (props.theme.width ? `${parseFloat(props.theme.width) / 2}rem` : "1.5rem")};
    border-radius: ${(props) => (props.theme.width ? `${parseFloat(props.theme.width) / 2}rem` : "1.5rem")};
    padding: 0;
    margin: 0;
    background: black;
`;

const InnerSwitchStyle = styled.div`
    position: absolute;
    height: 80%;
    width: 40%;
    border-radius: ${(props) => (props.theme.width ? `${parseFloat(props.theme.width) / 2}rem` : "1.5rem")};
    background-color: ${(props) => props.theme.innerCircleColor};
    display: inline-block;
    box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.082);
`;

/** Animated: Requires pose prop */
export const OuterSwitch = posed(OuterSwitchStyle)({
    disabled: {
        scale: 1,
        backgroundColor: (props) => props.theme.disabledColor,
    },
    enabled: {
        scale: 1,
        backgroundColor: (props) => props.theme.enabledColor,
    },
});

/** Animated: Requires pose prop */
export const InnerSwitch = posed(InnerSwitchStyle)({
    disabled: {
        left: "5%",
        right: "auto",
        transform: "scale(1, 1)",
    },
    enabled: {
        left: "auto",
        right: "5%",
        transform: "scale(1, 1)",
    },
});
