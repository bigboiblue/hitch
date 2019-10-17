import styled from "styled-components";
import posed from "react-pose";
import { centerElementY } from "../../styles/mixins";

export const Wrapper = styled.div`
    position: absolute;
`;

const OuterSwitchStyle = styled.div`
    position: relative;
    justify-self: flex-start;
    align-self: flex-start;
    width: ${(props) => props.width || "3rem"};
    height: ${(props) => (props.width ? `${parseFloat(props.width) / 2}rem` : "1.5rem")};
    border-radius: ${(props) => (props.width ? `${parseFloat(props.width) / 2}rem` : "1.5rem")};
    padding: 0;
    margin: 0;
    background: black;
`;

const InnerSwitchStyle = styled.div`
    ${centerElementY};
    position: absolute;
    height: 80%;
    width: 40%;
    border-radius: 1.2rem;
    background-color: rgb(238, 238, 238);
    display: inline-block;
    box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.082);
`;

/** Animated: Requires pose prop */
export const OuterSwitch = posed(OuterSwitchStyle)({
    disabled: {
        backgroundColor: "#aaa",
    },
    enabled: {
        backgroundColor: "#0088cc",
    },
});

/** Animated: Requires pose prop */
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
