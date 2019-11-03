import posed from "react-pose";
import styled from "styled-components";

const ContainerCore = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;


export const Container = posed(ContainerCore)({
    disabled: {
        zIndex: -1,
    },
    enabled: {
        zIndex: 10,
    },
});

export const InvisibleClickable = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 9;
    visibility: ${(props) => (props.isEnabled ? "visible" : "hidden")};
`;

const MenuContainerCore = styled.div`
    position: absolute;
    z-index: 10;
    padding: ${(props) => props.padding};
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    overflow: hidden;
    left: ${(props) => (props.position ? `${props.position.left}px` : 0)};
    top: ${(props) => (props.position ? `${props.position.top}px` : 0)};
`;

export const MenuContainer = posed(MenuContainerCore)({
    disabled: {
        scale: 0,
        backgroundColor: "#000",
        originX: "20%",
        originY: "20%",
        transition: {
            default: {
                ease: "easeOut",
                duration: 500,
                type: "spring",
                stiffness: 200,
                mass: 0.5,
                damping: 30,
            },
        },
    },
    enabled: {
        scale: 1,
        backgroundColor: (props) => props.theme.outlineColor,
        originX: "20%",
        originY: "20%",
        transition: {
            default: {
                ease: "easeOut",
                duration: 500,
                type: "spring",
                stiffness: 200,
                mass: 0.5,
                damping: 15,
            },
            backgroundColor: {
                ease: "easeOut",
                duration: 600,
            },
        },
    },
});
