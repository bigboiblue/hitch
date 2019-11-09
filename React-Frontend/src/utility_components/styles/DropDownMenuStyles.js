import posed from "react-pose";
import styled from "styled-components";

const ContainerCore = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    pointer-events: none;
`;


export const Container = posed(ContainerCore)({
    disabled: {
        zIndex: -1,
    },
    enabled: {
        zIndex: 10,
    },
});

const MenuContainerWrapperCore = styled.div`
    pointer-events: auto;
    position: absolute;
    z-index: 10;
    padding: ${(props) => props.theme.padding};
    border-radius: 0.3rem;
    overflow: hidden;
    left: ${(props) => (props.position ? `${props.position.left}px` : 0)};
    top: ${(props) => (props.position ? `${props.position.top}px` : 0)};
`;

export const MenuContainerWrapper = posed(MenuContainerWrapperCore)({
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

export const MenuContainer = styled.div`
    display: block;
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 0.2rem;
    overflow: hidden;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Spacer = styled.div`
    display: inline-block;
    width: 90%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
    margin-bottom: -1px;
`;
