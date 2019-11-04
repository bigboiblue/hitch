import React, { useContext } from "react";
import { Container, Title, FlagBoxContainer } from "./styles/MainContainerStyles";
import FlagBox from "./FlagBox";
import { ThemeContext } from "../styles/GlobalUserTheme";

// TODO: SERVER Transfer mongoose code to a separate node.js server
// import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/hitch", { useNewUrlParser: true });

// const flagsSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     isEnabled: { type: Boolean, required: true },
//     type: { type: String, required: true },
//     dateCreated: { type: Date, default: Date.now, required: true },
// },
// { versionKey: false });

// const flagModel = mongoose.model("flag", flagsSchema);


const flags = [{
    _id: "5d8e0ab72c661b041ac23ef4",
    name: "Great Feature",
    isEnabled: true,
    type: "Toggle",
    dateCreated: 1569589943822,
},
{
    _id: "5d8e0ab72c661b041ac23ef5",
    name: "Shit Feature",
    isEnabled: false,
    type: "Toggle",
    dateCreated: 1569589943822,
},
{
    _id: "5d8e0ab72c661b041ac23ef6",
    name: "My First Feature",
    isEnabled: true,
    type: "Toggle",
    dateCreated: 1569589943822,
},
{
    _id: "5d8e0ab72c661b041ac23ef6",
    name: "Some Amazing Feature",
    isEnabled: true,
    type: "Percentage Rollout",
    dateCreated: 1569589943822,
},
{
    _id: "5d8e0ab72c661b041ac23ef6",
    name: "Memelord",
    isEnabled: false,
    type: "Percentage Rollout",
    dateCreated: 1569589943822,
},
];

function getFlagBoxes(filter: string, flagArray: Record<string, any>[]):
    JSX.Element[] {
    // TODO: SERVER Remove temporary flags array below

    let flagBoxes: JSX.Element[] = [];
    let uniqueFilterValues;
    if (filter.toUpperCase() === "TYPE") {
        uniqueFilterValues = [...new Set(flagArray.map((value) => value.type))];
    }

    for (let i = 0; i < uniqueFilterValues.length; ++i) {
        const filteredFlags = flagArray.filter((value) => value.type === uniqueFilterValues[i]);
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

    //TODO: BIG REDUX At some point completely redo architecture of dropdown/context menu so that it
    //renders here. MenuItems and styling would be obtained from redux store. Maybe this would
    //warrent rewriting all components to make better use of redux;
    return (
        <Container theme={theme}>
            <Title theme={theme}>App - {props.title}</Title>
            <FlagBoxContainer>
                {getFlagBoxes(filter, flags)}
            </FlagBoxContainer>
        </Container>
    );
}
