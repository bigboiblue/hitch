import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid/v4";
import {
    Wrapper, Dot, AnimatedDot, DotWrapper,
} from "./styles/KebabMenu";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import MenuItem from "./DropDownMenu/MenuItem";
import useWindowSize from "../custom_hooks/useWindowSize";
import { createElementWithIdAndAppend } from "../utilityFunctions";


interface Props{
    /** This should be in a fixed unit such as rem or px (not %) */
    height?: string;
}
const tempMenuItems = [];
for (let i = 0; i < 5; ++i) {
    tempMenuItems.push(<MenuItem title={`Some Title ${i}`} key={`Some Title ${i}`} />);
}


export default function NewKebabMenu(props: Props): React.ReactElement {
    let [isMenuEnabled, setMenuEnabled] = useState(false);
    let middleDotRef: React.MutableRefObject<HTMLElement> = useRef();
    let [width, height] = useWindowSize();
    let instanceUUID = useRef(uuid());


    // TODO: const height = props.height || themeContext.kebabMenuHeight
    return (
        <Wrapper onClick={() => setMenuEnabled(!isMenuEnabled)} height={props.height}>
            <div style={{ borderRadius: width }} />
            <DotWrapper>
                <Dot height={props.height} />
            </DotWrapper>
            <DotWrapper>
                <AnimatedDot
                    ref={(ref) => { middleDotRef.current = ref; }}
                    height={props.height}
                    pose={isMenuEnabled ? "menuEnabled" : "menuDisabled"}
                />
                <DropDownMenu
                    position={middleDotRef}
                    menuItems={tempMenuItems}
                    isVisible={isMenuEnabled}
                />
            </DotWrapper>
            <DotWrapper>
                <Dot height={props.height} />
            </DotWrapper>
        </Wrapper>
    );
}
