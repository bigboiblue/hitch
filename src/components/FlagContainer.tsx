import React, { Component } from "react";

interface Props {
    filter: "type";
    flags: Record<string, any>;
}
interface State {

}

export default class FlagContainer extends Component<Props, State> {
    state = {}

    render() {
        let { filter, flags } = this.props;
        let flagTitles = flags.map((value, index) => <li>{value.name}</li>);

        return (
            <div>
                <h1>Filter: {filter}</h1>
                {flagTitles}
            </div>
        );
    }
}
