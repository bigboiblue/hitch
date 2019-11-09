import styled from "styled-components";
import posed from "react-pose";

const ContainerCore = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    overflow: hidden;
    background-color: white;
    visibility: visible;
    border-radius: 1rem;
    padding: 0.5rem 2rem 1rem 2rem;
    pointer-events: auto;
`;

export const Container = posed(ContainerCore)({
    visible: {
        transform: "scale(1)",
    },
    hidden: {
        transform: "scale(0)",
    },
});

export const Title = styled.h1`
    font: 500 2rem 'Work Sans', sans-serif;
    text-align: center;
`;

const WrapperCore = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
`;

export const Wrapper = posed(WrapperCore)({
    visible: {
        backgroundColor: "rgba(0,0,0,0.4)",
    },
    hidden: {
        backgroundColor: "rgba(0,0,0,0)",
    },
});

export const FormItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    position: relative;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem 3rem;
    justify-content: space-between;
`;

const ButtonCore = styled.button`
    height: 100%;
    font: 300 1rem 'Work Sans', sans-serif;
    border: 0px;
    border-radius: 0.3rem;
    outline: none;
    text-align: center;
    padding: 0.75rem 2rem;
`;

export const CancelButton = posed(ButtonCore)({
    hoverable: true,
    pressable: true,
    init: { backgroundColor: "#db6b6b" },
    hover: { backgroundColor: "#f79494" },
    press: { backgroundColor: "#964848" },
});


export const SubmitButton = posed(ButtonCore)({
    hoverable: true,
    pressable: true,
    init: { backgroundColor: "#6eb2e6" },
    hover: { backgroundColor: "#94ccf7" },
    press: { backgroundColor: "#3e81b5" },
});
