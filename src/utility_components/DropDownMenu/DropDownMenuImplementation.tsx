import React, { Component, ReactElement } from "react";
import ReactDOM from "react-dom";
import posed from "react-pose";
import uuid from "uuid/v4";
import MenuItem from "./MenuItem";
import styles from "../scss/DropDownMenu.scss";

interface Props {
    position: {left: number; top: number};
    menuItems: MenuItem[];
    className?: string;
    isVisible: boolean;
}
interface State {
    isVisible: boolean;
}

const Menu = posed.div({
    hidden: {
        height: 0,
        width: 0,
        padding: "0rem",
    },
    visible: {
        height: "auto",
        width: "auto",
        padding: "0.5rem",
    },
});

export default class DropDownMenu extends Component<Props, State> {
    private CLICK_OVERLAY_NAME: string;
    constructor(props: Props) {
        super(props);

        this.state = {
            isVisible: props.isVisible,
        };

        this.CLICK_OVERLAY_NAME = `dropMenuOverlay-${uuid()}`;

        this.disableMenu = this.disableMenu.bind(this);
        this.createClickableOverlay = this.createClickableOverlay.bind(this);
    }


    componentDidMount() {
        let { isVisible } = this.state;
        if (isVisible) {
            this.createClickableOverlay();
        }
    }

    componentDidUpdate() {
        let { isVisible } = this.state;
        if (isVisible) {
            this.createClickableOverlay();
        }
    }

    public disableMenu() {
        let element = document.getElementsByClassName(this.CLICK_OVERLAY_NAME)[0];
        element.parentElement.removeChild(element);
        this.setState({
            isVisible: false,
        });
    }

    private createClickableOverlay() {
        let { isVisible } = this.props;


        if (isVisible && !document.getElementsByClassName(this.CLICK_OVERLAY_NAME)[0]) {
            let clickOverlay = document.createElement("div");
            clickOverlay.className = this.CLICK_OVERLAY_NAME;
            document.body.appendChild(clickOverlay);

            ReactDOM.render(<div
                onClick={this.disableMenu}
                style={
                    {
                        height: "100vh",
                        width: "100vw",
                        zIndex: 999,
                        position: "fixed",
                        backgroundColor: "black",
                    }
                }
            />, document.getElementsByClassName(this.CLICK_OVERLAY_NAME)[0]);
        }
    }
    render() {
        let {
            position, className, menuItems, isVisible,
        } = this.props;

        return (
            <Menu
                className={`${styles.dropDownMenu} ${className}`}
                style={{ top: position.top, left: position.left }}
                pose={isVisible ? "visible" : "hidden"}
            >
                {menuItems}
            </Menu>
        );
    }
}
