import React, { useContext } from "react";
import { Container, BoxTitle, List } from "../styles/FlagBoxStyles";
import Flag from "./Flag";
import { ThemeContext } from "../../styles/GlobalUserTheme";


interface Props {
    filter: string;
    flagsData: FlagData[];
}

//TODO: BUG fix padding flag padding issue
//(when window is sized to be very small, padding doesn't remain consistent)
export default function FlagBox(props: Props): React.ReactElement {
    let theme = useContext(ThemeContext).flagBox;

    let flags = props.flagsData.map((value) => (
        <Flag key={value.name} flagData={value} />
    ));

    return (
        <Container theme={theme}>
            <BoxTitle theme={theme}>{`${props.filter}: ${props.flagsData[0].type}`}</BoxTitle>
            <List>
                {flags}
            </List>
        </Container>
    );
}
