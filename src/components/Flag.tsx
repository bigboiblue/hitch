import "./scss/Flag.scss";

import React, { Component } from "react";
import { black } from "ansi-colors";
import Switch from "./Assets/Switch";

interface Props {
    name: string;
}
interface State {

}

export default class Flag extends Component<Props, State> {
    state = {};

    render() {
        let { name } = this.props;

        return (
            <div className="flagContainer">
                <div className="switchWrapper">
                    <Switch color="#00BB00" />
                </div>
                <li key={name}>{name}</li>
            </div>
        );
    }
}
