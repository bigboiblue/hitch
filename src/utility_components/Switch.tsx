import React, { Component } from "react";
import styles from "./scss/Switch.scss";


interface Props {
    className: string;
}
interface State {
    isEnabled: boolean;
}

// TODO: Make size and color of the switch (and all utility components) modifyable via props
// TODO: Make switch use react-pose
export default class Switch extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            // TODO: Get state from the DB (actually pass from props)
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
        let { className } = this.props;

        let switchClass = this.state.isEnabled ? styles.switchAfter : styles.switchBefore;
        let switchCircleClass = this.state.isEnabled ? styles.switchCircleAfter : styles.switchCircleBefore;

        return (
            <div className={`${styles.switchWrapper} ${className}`}>
                <div className={switchClass} onClick={this.toggle}>
                    <div className={switchCircleClass} />
                </div>
            </div>
        );
    }
}
