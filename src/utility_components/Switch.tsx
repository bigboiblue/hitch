import React, { useState } from "react";
import { Wrapper, OuterSwitch, InnerSwitch } from "./styles/SwitchStyles";
import { SwitchTheme } from "../styles/GlobalUserTheme";


interface Props {
    isEnabled: boolean;
    handleToggle: () => void;
    theme: SwitchTheme;
}

export default function Switch(props: Props): React.ReactElement {
    return (
        <Wrapper onClick={props.handleToggle}>
            <OuterSwitch theme={props.theme} pose={props.isEnabled ? "enabled" : "disabled"}>
                <InnerSwitch theme={props.theme} pose={props.isEnabled ? "enabled" : "disabled"} />
            </OuterSwitch>
        </Wrapper>
    );
}
