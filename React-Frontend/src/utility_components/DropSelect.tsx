import React, { useState } from "react";
import { Container, Title, Item } from "./styles/DropSelectStyles";

interface Props{
    handleSelect: (string) => any;
    title: string;
    items: string[];
    current?: string;
}


export default function DropSelect(props: Props): React.ReactElement {
    let [isMenuDropped, setIsMenuDropped] = useState(false);

    return (
        <Container>
            <Title onClick={() => setIsMenuDropped(!isMenuDropped)}>{props.title}</Title>
            {isMenuDropped ? props.items.map((value) => <Item onClick={() => props.handleSelect(value)} key={value} style={props.current === value ? { textDecoration: "underline" } : {}}>{value}</Item>) : <></>}
        </Container>
    );
}
