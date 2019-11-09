import React, { useRef, useState } from "react";
import {
    Wrapper, Dot, AnimatedDot, DotWrapper,
} from "./styles/KebabMenuStyles";
import DropDownMenu from "./DropDownMenu";
import { KebabMenuTheme } from "../styles/GlobalUserTheme";


interface Props {
    /** This should be in a fixed unit such as rem or px (not %) */
    height?: string;
    menuItemData: MenuItemData[];
    theme: KebabMenuTheme;
    parent?: HTMLElement;
}


export default function NewKebabMenu(props: Props): React.ReactElement {
    let [isMenuEnabled, setMenuEnabled] = useState(false);
    let [isHovering, setIsHovering] = useState(false);
    let middleDotRef: React.MutableRefObject<HTMLElement> = useRef();

    function toggleMenu(): boolean {
        setMenuEnabled(!isMenuEnabled);
        return isMenuEnabled;
    }

    return (
        <>
            <DropDownMenu
                position={middleDotRef}
                menuItemData={props.menuItemData}
                handleToggle={toggleMenu}
                isEnabled={isMenuEnabled}
                parent={props.parent || document.getElementById("portal")}
                theme={props.theme.dropDownMenu}
            />
            <Wrapper
                onClick={toggleMenu}
                theme={props.theme}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <DotWrapper>
                    <Dot theme={props.theme} />
                </DotWrapper>
                <DotWrapper>
                    <AnimatedDot
                        ref={(ref) => { middleDotRef.current = ref; }}
                        theme={props.theme}
                        pose={isMenuEnabled ? "menuEnabled" : "menuDisabled"}
                    />
                </DotWrapper>
                <DotWrapper>
                    <Dot theme={props.theme} />
                </DotWrapper>
            </Wrapper>
        </>

    );
}
