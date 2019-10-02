
import React, { Component } from "react";
import posed from "react-pose";
import styles from "./scss/KebabMenu.scss";

interface Props {
    className: string;
}
interface State {

}

export default class KebabMenu extends Component<Props, State> {
    state = {}

    render() {
        let { className } = this.props;

        return (
            <div className={`${styles.kebabMenuWrapper} ${className}`}>
                <div className={styles.kebabMenu}>
                    <div className={styles.upperDotWrapper}>
                        <div className={styles.dot} />
                    </div>
                    <div className="midDotWrapper">
                        <div className={styles.dot} />
                    </div>
                    <div className={styles.lowerDotWrapper}>
                        <div className={styles.dot} />
                    </div>
                </div>
            </div>
        );
    }
}
