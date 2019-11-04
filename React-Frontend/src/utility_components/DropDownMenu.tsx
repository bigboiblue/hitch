import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid/v4";
import { createElementWithIdAndAppend, getMidPoint } from "../utilityFunctions";
import {
    MenuContainerWrapper, MenuContainer, Container, InvisibleClickable, Spacer,
} from "./styles/DropDownMenuStyles";
import MenuItem from "./MenuItem";
import { DropMenuTheme } from "../styles/GlobalUserTheme";


type absoluteGlobalPosition = { left: number; top: number };
type refPosition = React.MutableRefObject<HTMLElement>;
type positionType = { left: number; top: number } | refPosition;

interface Props {
    /** Position passed can either be an absolute window position ( {left: number; top: number} )
     * [in px] OR a DOM node ref can be passed ( React.MutableRefObject<HTMLElement> ). In this
     * case, the menu will be positioned to the center of the DOM node. */
    position: positionType;
    menuItemData: MenuItemData[];
    isEnabled: boolean;
    handleToggle: () => boolean;
    theme: DropMenuTheme;
}

function isAbsoluteGlobalPosition(obj: absoluteGlobalPosition | refPosition):
    obj is absoluteGlobalPosition {
    return typeof (obj as absoluteGlobalPosition).left === "number";
}

function initDropMenu(menuContainerId: string): void {
    const dropDownMenuGlobalContainer = createElementWithIdAndAppend(
        "div",
        "dropDownMenuGlobalContainer",
        document.getElementById("portal"),
    );
    createElementWithIdAndAppend(
        "div",
        menuContainerId,
        dropDownMenuGlobalContainer,
    );
}


export default function DropDownMenu(props: Props): React.ReactElement {
    const menuContainerId = useRef(`DropDownMenu-${uuid()}`).current;
    const [position, setPosition] = useState(props.position);
    initDropMenu(menuContainerId);

    function shouldUpdatePosition(): boolean {
        if (props.isEnabled && !isAbsoluteGlobalPosition(props.position)) {
            const nextMenuPosition = getMidPoint(
                (props.position as React.MutableRefObject<HTMLElement>).current,
            );
            const currentMenuPositionString = Object.entries(position).toString();
            const nextMenuPositionString = Object.entries(nextMenuPosition).toString();
            const hasPositionchanged = currentMenuPositionString !== nextMenuPositionString;
            return hasPositionchanged;
        }
        return false;
    }

    function updatePosition(): void {
        if (shouldUpdatePosition()) {
            setPosition(
                getMidPoint((props.position as React.MutableRefObject<HTMLElement>).current),
            );
        }
    }


    useEffect(() => {
        updatePosition();
        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition);
        return () => {
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", updatePosition);
        };
    });


    const currentPose = props.isEnabled && isAbsoluteGlobalPosition(position) ? "enabled" : "disabled";
    return (
        <>
            {
                ReactDOM.createPortal(
                    <Container isEnabled={props.isEnabled} pose={currentPose}>
                        <InvisibleClickable
                            isEnabled={props.isEnabled}
                            onClick={props.handleToggle}
                        />
                        <MenuContainerWrapper
                            pose={currentPose}
                            color="#0F5257"
                            padding="0.25rem"
                            position={position}
                            theme={props.theme}
                        >
                            <MenuContainer>
                                {
                                    props.menuItemData.map((value, index) => {
                                        const spacer = (index < props.menuItemData.length - 1 ? <Spacer /> : <></ >);
                                        return (
                                            <React.Fragment key={value.title}>
                                                <MenuItem
                                                    menuItemData={value}
                                                    key={uuid()}
                                                    theme={props.theme.menuItem}
                                                />
                                                {spacer}
                                            </React.Fragment>
                                        );
                                    })
                                }
                            </MenuContainer>
                        </MenuContainerWrapper>
                    </Container>,
                    document.getElementById(menuContainerId),
                )
            }
        </>
    );
}
