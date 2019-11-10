import styled from "styled-components";
import posed from "react-pose";

const ButtonCore = styled.button`
    height: 100%;
    font: 300 1rem 'Work Sans', sans-serif;
    border: 0px;
    border-radius: 0.3rem;
    outline: none;
    text-align: center;
    padding: 0.75rem 2rem;
`;

export const Button = posed(ButtonCore)({
    hoverable: true,
    pressable: true,
    init: { backgroundColor: "#a4db74" },
    hover: { backgroundColor: "#b5ed85" },
    press: { backgroundColor: "#5a8237" },
});
