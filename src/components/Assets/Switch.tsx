import "./scss/Switch.scss";

import React, { Component } from "react";

interface Props {
    color: string;
}
interface State {
    isEnabled: boolean;
}

export default class Switch extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            // TODO: Get state from the DB
            isEnabled: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    public toggle: () => boolean = () => {
        this.setState((state) => ({
            isEnabled: !state.isEnabled,
        }));

        return this.state.isEnabled;
    }

    public isEnabled: () => boolean = () => this.state.isEnabled

    render(): React.ReactElement {
        let switchClass = this.state.isEnabled ? "switchAfter" : "switchBefore";
        let switchCircleClass = this.state.isEnabled ? "switchCircleAfter" : "switchCircleBefore";

        return (
            <span
                className={switchClass}
                onClick={this.toggle}
            >
                <span className={switchCircleClass} />
            </span>
        );
    }
}
