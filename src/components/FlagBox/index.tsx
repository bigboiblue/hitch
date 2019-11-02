import React from "react";
import { Container, BoxTitle, List } from "../styles/FlagBoxStyles";
import Flag from "./Flag";


interface Props {
    title: string;
    flags: Record<string, any>;
}

//TODO: BUG fix padding flag padding issue
//(when window is sized to be very small, padding doesn't remain consistent)
export default function FlagBox(props: Props): React.ReactElement {
    let flagTitles = props.flags.map((value) => (
        <Flag key={value.name} flagData={value} />
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
