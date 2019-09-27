import React, { Component } from "react";

interface Props {
    style: "horizontal" | "vertical";
}
interface State {
    height: number;

}

export default class NavBar extends Component<Props, State> {
    state = {}

    render() {
        let { style } = this.props;


        if (style === "vertical") {
            this.state.height = 100;
            this.state.width = 100;
        }
        return (
            <div>
                <h1>{ title }</h1>
            </div>
        );
    }
}
