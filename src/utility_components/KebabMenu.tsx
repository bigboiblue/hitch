
import React, { Component, ReactElement } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid/v4";
import posed from "react-pose";
import DropDownMenu from "./DropDownMenu";
import styles from "./scss/KebabMenu.scss";


interface Props {
    className?: string;
}
interface State {
    menuEnabled: boolean;
}

export default class KebabMenu extends Component<Props, State> {
    private middleDotRef;
    private menuWidthRef;

    constructor(props: Props) {
        super(props);

        this.state = {
            menuEnabled: false,
        };

        this.middleDotRef = React.createRef();
        this.showMenu = this.showMenu.bind(this);
    }

    public showMenu(): void {
        this.setState({
            menuEnabled: true,
        });

        let middleDotRef = this.middleDotRef.current as HTMLElement;
        let menuPositionFromUpperRight = {
            x: middleDotRef.getBoundingClientRect().left,
            y: middleDotRef.getBoundingClientRect().top,
        };

        const MENU_PLACEHOLDER_CLASS_NAME = "dropDownMenuPlaceholder";
        if (document.getElementsByClassName(MENU_PLACEHOLDER_CLASS_NAME).length === 0) {
            let menuPlaceholder = document.createElement("div");
            menuPlaceholder.className = MENU_PLACEHOLDER_CLASS_NAME;
            document.body.appendChild(menuPlaceholder);
        }

        ReactDOM.render(
            <DropDownMenu position={menuPositionFromUpperRight} className={styles.correctMenuPosition} />,
            document.getElementsByClassName(MENU_PLACEHOLDER_CLASS_NAME)[0],
        );
    }

    render() {
        let { className } = this.props;
        let { menuEnabled } = this.state;

        let menu = <></>;
        if (menuEnabled) {
            // TODO: Create animation with dots
        }

        return (
            <div className={`${styles.kebabMenuWrapper} ${className}`} onClick={this.showMenu}>
                <div className={styles.kebabMenu}>
                    <div className={styles.upperDotWrapper}>
                        <div className={styles.dot} />
                    </div>
                    <div className="midDotWrapper">
                        <div className={styles.dot} ref={this.middleDotRef} />
                    </div>
                    <div className={styles.lowerDotWrapper}>
                        <div className={styles.dot} />
                    </div>
                </div>
            </div>
        );
    }
}
