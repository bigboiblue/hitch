import React, { useState, useContext } from "react";
import {
    Container, Title, SwitchWrapper, KebabMenuWrapper,
} from "../styles/FlagStyles";

import Switch from "../../utility_components/Switch";
import KebabMenu from "../../utility_components/KebabMenu";
import { ThemeContext } from "../../styles/GlobalUserTheme";

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
    let theme = useContext(ThemeContext).flagBox.flag;

    function handleToggle(): void {
        setIsEnabled(!isEnabled);
    }

    return (
        <Container theme={theme}>
            <SwitchWrapper>
                <Switch isEnabled={isEnabled} handleToggle={handleToggle} theme={theme.switch} />
            </SwitchWrapper>
            <Title key={_id} theme={theme}>{name}</Title>
            <KebabMenuWrapper>
                <KebabMenu menuItemData={tempMenuItems} theme={theme.kebabMenu} />
            </KebabMenuWrapper>
        </Container>
    );
}
