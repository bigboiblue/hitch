import posed from "react-pose";
import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    left: ${(props) => (props.position ? `${props.position.left}px` : 0)};
    top: ${(props) => (props.position ? `${props.position.top}px` : 0)};
`;

const ContainerCore = styled.div`
    position: absolute;
    z-index: 10;
    padding: ${(props) => props.padding};
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    overflow: hidden;
`;

export const Container = posed(ContainerCore)({
    disabled: {
        scale: 0,
        backgroundColor: "#fff",
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
        backgroundColor: (props) => props.color,
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
