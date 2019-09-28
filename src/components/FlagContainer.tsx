import "./scss/FlagContainer.scss";

import React, { Component } from "react";

interface Props {
    title: string;
    flags: Record<string, any>;
}
interface State {

}

export default class FlagContainer extends Component<Props, State> {
    state = {}

    render() {
        let { title, flags } = this.props;
        let flagTitles = flags.map((value) => <li key={value.name}>{value.name}</li>);

        return (
            <div className="flagContainer">
                <h1>{title}</h1>
                <ul>
                    {flagTitles}
                </ul>
            </div>
        );
    }
}
