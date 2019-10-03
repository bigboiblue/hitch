import React, { Component } from "react";
import styles from "./scss/DropDownMenu.scss";

interface Props {
    position: {x: number; y: number};
    className?: string;
}
interface State {

}

export default class DropDownMenu extends Component<Props, State> {
    state = {}


    render() {
        let { position, className } = this.props;

        return (
            <div className={`${styles.temp} ${className}`} style={{ top: position.y, left: position.x }} />
        );
    }
}
