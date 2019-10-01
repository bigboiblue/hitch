import "./scss/MainContainer.scss";

import React, { Component } from "react";
import FlagBox from "./FlagBox";

// TODO: Transfer mongoose code to a separate node.js server
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

interface Props {
    title: string;
}
interface State {
    any;
}

export default class MainContainer extends Component<Props, State> {
    state = {}

    private FlagBoxes: React.ReactElement[] = [];
    private filter: "type";

    constructor(props: Props) {
        super(props);
        // TODO: Create default filter type
        this.filter = "type";
        this.fillFlagBoxes(this.filter);
    }

    fillFlagBoxes(filter: "type"): void {
        // TODO: Remove temporary flags array below
        const flags = [{
            _id: "5d8e0ab72c661b041ac23ef4",
            name: "Great Feature",
            isEnabled: true,
            type: "toggle",
            dateCreated: 1569589943822,
        },
        {
            _id: "5d8e0ab72c661b041ac23ef5",
            name: "Shit Feature",
            isEnabled: false,
            type: "toggle",
            dateCreated: 1569589943822,
        },
        {
            _id: "5d8e0ab72c661b041ac23ef6",
            name: "My First Feature",
            isEnabled: true,
            type: "toggle",
            dateCreated: 1569589943822,
        },
        {
            _id: "5d8e0ab72c661b041ac23ef6",
            name: "My First Feature",
            isEnabled: true,
            type: "dd",
            dateCreated: 1569589943822,
        },
        ];
        let uniqueFilterValues;
        if (filter === "type") {
            uniqueFilterValues = [...new Set(flags.map((value) => value.type))];
        }

        for (let i = 0; i < uniqueFilterValues.length; ++i) {
            const filteredFlags = flags.filter((value) => value.type === uniqueFilterValues[i]);
            const title = `${filter}: ${uniqueFilterValues[i]}`;
            this.FlagBoxes.push(
                <FlagBox key={i} title={title} flags={filteredFlags} />,
            );
        }
    }

    render(): React.ReactElement {
        let { title } = this.props;

        return (
            <div id="mainContainer">
                <h1>App - { title }</h1>
                <div id="flagBoxContainer">
                    {this.FlagBoxes}
                </div>
            </div>
        );
    }
}
