import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid/v4";
import MenuItem from "./MenuItem";
import DropDownMenuImplementation from "./DropDownMenuImplementation";
import { createElementWithIdAndAppend, getMidPoint } from "../../utilityFunctions";

type absoluteGlobalPosition = {left: number; top: number};
type refPosition = React.MutableRefObject<HTMLElement>;
type positionType = {left: number; top: number} | refPosition;

interface Props {
    /** Position passed can either be an absolute window position ( {left: number; top: number} ) OR
     * a DOM node ref can be passed ( React.MutableRefObject<HTMLElement> ). In this case, the menu
     * will be positioned to the center of the DOM node. */
    position: positionType;
    menuItems: MenuItem[];
    isVisible: boolean;
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

    function updatePosition(): void {
        console.log("dowaij");
        setPosition(
            getMidPoint((props.position as React.MutableRefObject<HTMLElement>).current),
        );
    }

    function effect() {
        const nextMenuPosition = getMidPoint(
            (props.position as React.MutableRefObject<HTMLElement>).current,
        );
        if (Object.entries(position).toString() !== Object.entries(nextMenuPosition).toString()) {
            updatePosition();
        }
        window.addEventListener("resize", effect);
        return () => {
            window.removeEventListener("resize", effect);
        };
    }

    useEffect(effect);

    if (isAbsoluteGlobalPosition(position)) {
        return (
            <>
                {
                    ReactDOM.createPortal(<DropDownMenuImplementation
                        position={position}
                        menuItems={props.menuItems}
                        isVisible={props.isVisible}
                    />, document.getElementById(menuContainerId))
                }
            </>
        );
    }
    return (
        <>
        </>
    );
}
