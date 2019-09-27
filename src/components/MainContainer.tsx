import React, { Component } from "react";
import FlagContainer from "./FlagContainer";
import "./scss/MainContainer.scss";


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

    private flagContainers: React.ReactElement[] = [];
    private filter: "type";

    constructor(props: Props) {
        super(props);
        this.filter = "type";
        this.fillFlagContainers(this.filter);
    }

    fillFlagContainers(filter: "type") {
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
            this.flagContainers.push(<FlagContainer key={i} filter={filter} flags={filteredFlags} />);
        }
    }

    render() {
        let { title } = this.props;

        return (
            <div id="mainContainer">
                <h1>{ title }</h1>
                {this.flagContainers}
            </div>
        );
    }
}
