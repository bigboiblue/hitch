import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid/v4";
import { catchClause } from "@babel/types";
import { createElementWithIdAndAppend, getMidPoint } from "../../utilityFunctions";
import { Wrapper, Container } from "../styles/DropDownMenuStyles";
import MenuItem from "./MenuItem";


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
        return () => {
            window.removeEventListener("resize", updatePosition);
        };
    });


    return (
        <>
            {
                ReactDOM.createPortal(
                    <Wrapper position={position}>
                        <Container
                            pose={props.isEnabled && isAbsoluteGlobalPosition(position) ? "enabled" : "disabled"}
                            color="#0F5257"
                            padding="0.25rem"
                        >
                            {
                                props.menuItemData.map((value) => (
                                    <MenuItem menuItemData={value} key={value.title} />
                                ))
                            }
                        </Container>
                    </Wrapper>,
                    document.getElementById(menuContainerId),
                )
            }
        </>
    );
}
