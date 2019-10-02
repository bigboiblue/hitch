import React, { Component } from "react";
import styles from "./scss/FlagBox.scss";

import Flag from "./Flag";

interface Props {
    title: string;
    flags: Record<string, any>;
}
interface State {

}

export default class FlagBox extends Component<Props, State> {
    state = {}

    render() {
        let { title, flags } = this.props;
        let flagTitles = flags.map((value) => (
            <Flag key={value.name} name={value.name} />
        ));

        return (
            <div className={styles.flagBox}>
                <h1>{title}</h1>
                <ul>
                    {flagTitles}
                </ul>
            </div>
        );
    }
}
