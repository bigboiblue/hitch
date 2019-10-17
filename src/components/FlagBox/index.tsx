import React from "react";
import { Container, BoxTitle, List } from "../styles/FlagBoxStyles";
import Flag from "./Flag";


interface Props {
    title: string;
    flags: Record<string, any>;
}

export default function FlagBox(props: Props): React.ReactElement {
    let flagTitles = props.flags.map((value) => (
        <Flag key={value.name} name={value.name} />
    ));

    return (
        <Container>
            <BoxTitle>{props.title}</BoxTitle>
            <List>
                {flagTitles}
            </List>
        </Container>
    );
}
