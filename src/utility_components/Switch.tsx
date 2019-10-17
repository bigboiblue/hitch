import React from "react";
import { Wrapper, OuterSwitch, InnerSwitch } from "./styles/SwitchMenuStyles";

export default function Switch(): React.ReactElement {
    let [isEnabled, setEnabled] = React.useState(false);

    return (
        <Wrapper onClick={() => setEnabled(!isEnabled)}>
            <OuterSwitch width="3rem" pose={isEnabled ? "enabled" : "disabled"}>
                <InnerSwitch pose={isEnabled ? "enabled" : "disabled"} />
            </OuterSwitch>
        </Wrapper>
    );
}
