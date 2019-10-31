import React from "react";
import { Wrapper, OuterSwitch, InnerSwitch } from "./styles/SwitchMenuStyles";


interface Props {
    isEnabled: boolean;
    handleToggle: () => void;
}

export default function Switch(props: Props): React.ReactElement {
    return (
        <Wrapper onClick={props.handleToggle}>
            <OuterSwitch width="3rem" pose={props.isEnabled ? "enabled" : "disabled"}>
                <InnerSwitch pose={props.isEnabled ? "enabled" : "disabled"} />
            </OuterSwitch>
        </Wrapper>
    );
}
