import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Container, Title, FlagBoxContainer } from "./styles/MainContainerStyles";
import FlagBox from "./FlagBox";
import { ThemeContext } from "../styles/GlobalUserTheme";

async function getFlagBoxes(filter: string): Promise<React.ReactElement[]> {
    const flags: FlagData[] = (await axios.get("http://localhost:8081/api/v1/flags?group=MyApp", { responseType: "json" })).data;
    let uniqueFilterValues: string[];
    if (filter.toUpperCase() === "TYPE") {
        uniqueFilterValues = [...new Set(flags.map((value) => value.type))];
    }

    let flagBoxes: React.ReactElement[] = [];
    for (let i = 0; i < uniqueFilterValues.length; ++i) {
        const filteredFlags = flags.filter((value) => value.type === uniqueFilterValues[i]);
        flagBoxes.push(
            <FlagBox key={i} filter={filter} flagsData={filteredFlags} />,
        );
    }
    return flagBoxes;
}

interface Props {
    title: string;
}

export default function MainContainer(props: Props): React.ReactElement {
    let theme = useContext(ThemeContext).main;
    let filter = "Type";
    let [flagBoxes, setFlagBoxes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setFlagBoxes(await getFlagBoxes(filter));
        };
        if (flagBoxes.length === 0) {
            fetchData();
        }
    });

    //TODO: BIG REDUX At some point completely redo architecture of dropdown/context menu so that it
    //renders here. MenuItems and styling would be obtained from redux store. Maybe this would
    //warrent rewriting all components to make better use of redux;
    return (
        <Container theme={theme}>
            <Title theme={theme}>App - {props.title}</Title>
            <FlagBoxContainer>
                {flagBoxes}
            </FlagBoxContainer>
        </Container>
    );
}
