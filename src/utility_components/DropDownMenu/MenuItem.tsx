import React, { Component } from "react";
import styles from "../scss/MenuItem.scss";

interface Props {
    title: string;
    action?: (any?) => {type: string; payload: Record<string, any>};
}
interface State {

}

export default class MenuItem extends Component<Props, State> {
    state = {};

    render() {
        let { title, action } = this.props;
        return (
            <div className={styles.menuItemWrapper} onClick={action}>
                <div className={styles.menuItem} />
                <p>{title}</p>
            </div>
        );
    }
}
