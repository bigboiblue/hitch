import React from "react";
import styles from "./styles/Switch";

interface Props{
    any?;
}

export default function NewSwitch(Props: props): React.ReactElement {
    <div className={styles.switchWrapper}>
        <button className={styles.switch}>
            <div className={styles.switchInnerCircle} />
        </button>
    </div>;
}
