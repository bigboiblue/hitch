
import React, { Component, ReactElement } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid/v4";
import posed from "react-pose";
import MenuItem from "./DropDownMenu/MenuItem";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import styles from "./scss/KebabMenu.scss";


interface Props {
    className?: string;
}
interface State {
    menuEnabled: boolean;
}

export default class KebabMenu extends Component<Props, State> {
    private middleDotRef: React.RefObject<HTMLDivElement>;
    private menuWidthRef: React.RefObject<HTMLDivElement>;
    private menuItems: MenuItem[];
    private MENU_CONTAINER_NAME: string;
    private instanceUUID: string;

    constructor(props: Props) {
        super(props);

        this.state = {
            menuEnabled: false,
        };

        this.instanceUUID = uuid();

        // TODO: This menuItems initialisation is temporary, and for testing purposes.
        // Find a better way to store menuItems
        this.menuItems = [];
        for (let i = 0; i < 5; ++i) {
            this.menuItems.push(<MenuItem title={`Some Title ${i}`} key={`Some Title ${i}`} />);
        }

        this.MENU_CONTAINER_NAME = `kebabDropDownMenuContainer-${this.instanceUUID}`;
        let menuPlaceholder = document.createElement("div");
        menuPlaceholder.className = this.MENU_CONTAINER_NAME;
        document.body.appendChild(menuPlaceholder);

        this.middleDotRef = React.createRef();
        this.calcMenuPosition = this.calcMenuPosition.bind(this);
        this.toggleMenuState = this.toggleMenuState.bind(this);
        this.updateMenuProps = this.updateMenuProps.bind(this);
    }


    componentDidMount() {
        this.updateMenuProps();
    }

    componentDidUpdate() {
        this.updateMenuProps();
    }
    public calcMenuPosition(): {top: number; left: number} {
        let middleDotRef = this.middleDotRef.current as HTMLElement;
        let menuPositionFromUpperRight = {
            left: middleDotRef.getBoundingClientRect().left,
            top: middleDotRef.getBoundingClientRect().top,
        };

        return menuPositionFromUpperRight;
    }

    public toggleMenuState() {
        const newMenuEnabled = !this.state.menuEnabled;
        this.setState({ menuEnabled: newMenuEnabled });
    }


    private updateMenuProps() {
        setTimeout(() => {
            let { menuEnabled } = this.state;

            ReactDOM.render(
                <DropDownMenu
                    position={this.calcMenuPosition()}
                    className={styles.correctMenuPosition}
                    menuItems={this.menuItems}
                    isVisible={menuEnabled}
                />,
                document.getElementsByClassName(this.MENU_CONTAINER_NAME)[0],
            );
        });
    }

    render() {
        let { className } = this.props;
        let { menuEnabled } = this.state;


        //TODO: BIG... Convert all component code to use react hooks
        // React.useEffect(() => {
        //     ReactDOM.render(
        //         <DropDownMenu
        //             position={this.calcMenuPosition()}
        //             className={styles.correctMenuPosition}
        //             menuItems={this.menuItems}
        //             isEnabled={menuEnabled}
        //         />,
        //         document.getElementsByClassName(this.MENU_CONTAINER_NAME)[0],
        //     );
        // });

        return (
            <div className={`${styles.kebabMenuWrapper} ${className}`} onClick={this.toggleMenuState}>
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
