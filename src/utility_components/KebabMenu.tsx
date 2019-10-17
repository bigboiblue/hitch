import React, { useRef, useState } from "react";
import {
    Wrapper, Dot, AnimatedDot, DotWrapper,
} from "./styles/KebabMenuStyles";
import DropDownMenu from "./DropDownMenu";
import MenuItem from "./DropDownMenu/MenuItem";


interface Props{
    /** This should be in a fixed unit such as rem or px (not %) */
    height?: string;
    menuItems: React.FunctionComponent<typeof MenuItem>[];
}


export default function NewKebabMenu(props: Props): React.ReactElement {
    let [isMenuEnabled, setMenuEnabled] = useState(false);
    let middleDotRef: React.MutableRefObject<HTMLElement> = useRef();

    function toggleMenu(): boolean {
        setMenuEnabled(!isMenuEnabled);
        return isMenuEnabled;
    }

    // TODO: const height = props.height || themeContext.kebabMenuHeight
    return (
        <>
            <DropDownMenu
                position={middleDotRef}
                menuItems={props.menuItems}
                handleToggle={toggleMenu}
                isEnabled={isMenuEnabled}
            />
            <Wrapper onClick={toggleMenu} height={props.height}>
                <DotWrapper>
                    <Dot height={props.height} />
                </DotWrapper>
                <DotWrapper>
                    <AnimatedDot
                        ref={(ref) => { middleDotRef.current = ref; }}
                        height={props.height}
                        pose={isMenuEnabled ? "menuEnabled" : "menuDisabled"}
                    />
                </DotWrapper>
                <DotWrapper>
                    <Dot height={props.height} />
                </DotWrapper>
            </Wrapper>
        </>

    );
}
