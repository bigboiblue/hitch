import React, { useRef, useState } from "react";
import {
    Wrapper, Dot, AnimatedDot, DotWrapper,
} from "./styles/KebabMenuStyles";
import DropDownMenu from "./DropDownMenu";


interface Props {
    /** This should be in a fixed unit such as rem or px (not %) */
    height?: string;
    parent: string;
    menuItemData: MenuItemData[];
}


export default function NewKebabMenu(props: Props): React.ReactElement {
    let [isMenuEnabled, setMenuEnabled] = useState(false);
    let middleDotRef: React.MutableRefObject<HTMLElement> = useRef();

    function toggleMenu(): boolean {
        setMenuEnabled(!isMenuEnabled);
        return isMenuEnabled;
    }

    // TODO: THEMING const height = props.height || themeContext.kebabMenuHeight
    return (
        <>
            <DropDownMenu
                position={middleDotRef}
                menuItemData={props.menuItemData}
                handleToggle={toggleMenu}
                parent={props.parent}
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
