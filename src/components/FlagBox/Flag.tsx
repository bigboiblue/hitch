import React, { useState } from "react";
import {
    Container, Title, SwitchWrapper, KebabMenuWrapper,
} from "../styles/FlagStyles";

import Switch from "../../utility_components/Switch";
import KebabMenu from "../../utility_components/KebabMenu";

interface FlagData {
    _id: string;
    name: string;
    isEnabled: boolean;
    type: string;
    dateCreated: number;
}

interface Props {
    flagData: FlagData;
}

//TODO: SERVER replace this with db data
const tempMenuItems: MenuItemData[] = [];
for (let i = 0; i < 5; ++i) {
    tempMenuItems.push({ title: `Some Title ${i}`, action: () => ({ type: "", payload: {} }) });
}

export default function Flag(props: Props): React.ReactElement {
    let {
        _id, name, type, dateCreated,
    } = props.flagData;
    let [isEnabled, setIsEnabled] = useState(props.flagData.isEnabled);

    function handleToggle(): void {
        setIsEnabled(!isEnabled);
    }

    return (
        <Container>
            <SwitchWrapper>
                <Switch isEnabled={isEnabled} handleToggle={handleToggle} />
            </SwitchWrapper>
            <Title key={_id}>{name}</Title>
            <KebabMenuWrapper>
                <KebabMenu menuItemData={tempMenuItems} />
            </KebabMenuWrapper>
        </Container>
    );
}
