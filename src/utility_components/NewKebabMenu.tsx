import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid/v4";
import {
    Wrapper, Dot, AnimatedDot, DotWrapper,
} from "./styles/KebabMenu";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import MenuItem from "./DropDownMenu/MenuItem";
import useWindowSize from "../custom_hooks/useWindowSize";


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
    let middleDotRef: React.RefObject<HTMLElement> = useRef();
    let [width, height] = useWindowSize();
    width = 1;

    function removeMenu(): void {

    }

    useEffect(() => {
        document.create
        ReactDOM.render(<DropDownMenu position={getMenuLocation(middleDotRef.current)} menuItems={tempMenuItems} visible={isMenuEnabled} />, document.body.firstChild);
    });

    // TODO: const height = props.height || themeContext.kebabMenuHeight
    return (
        <Wrapper onClick={() => setMenuEnabled(!isMenuEnabled)} height={props.height}>
            <div style={{ borderRadius: width }} />
            <DotWrapper>
                <AnimatedDot height={props.height} pose={isMenuEnabled ? "menuEnabled" : "menuDisabled"} />
            </DotWrapper>
            <DotWrapper ref={middleDotRef}>
                <AnimatedDot height={props.height} pose={isMenuEnabled ? "menuEnabled" : "menuDisabled"} />
            </DotWrapper>
            <DotWrapper>
                <AnimatedDot height={props.height} pose={isMenuEnabled ? "menuEnabled" : "menuDisabled"} />
            </DotWrapper>
        </Wrapper>
    );
}

function getMenuLocation(middleDotNode: HTMLElement): {left: number; top: number} {
    const {
        left, top, width, height,
    } = middleDotNode.getBoundingClientRect();
    const midPoint = {
        left: left + (width / 2),
        top: top + (height / 2),
    };
    return midPoint;
}
