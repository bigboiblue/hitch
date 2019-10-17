import React from "react";
/** TODO: Modify KebabMenu and DropDownMenu such that instead of passing MenuItems
 *  you instead pass an array of objects {title: string, action: () => ({type, payload})}
 *  Thus removing the dependency (MenuItem) and the need to know about the implementation
 *  of KebebMenu and DropDownMenu */
import MenuItem from "../../utility_components/DropDownMenu/MenuItem";
import {
    Container, Title, SwitchWrapper, KebabMenuWrapper,
} from "../styles/FlagStyles";

import Switch from "../../utility_components/Switch";
import KebabMenu from "../../utility_components/KebabMenu";

interface Props {
    name: string;
}

const tempMenuItems = [];
for (let i = 0; i < 5; ++i) {
    tempMenuItems.push(<MenuItem title={`Some Title ${i}`} action={() => ({ type: "", payload: {} })} key={`Some Title ${i}`} />);
}

export default function Flag(props: Props): React.ReactElement {
    return (
        <Container>
            <SwitchWrapper>
                <Switch />
            </SwitchWrapper>
            <Title key={props.name}>{props.name}</Title>
            <KebabMenuWrapper>
                <KebabMenu menuItems={tempMenuItems} />
            </KebabMenuWrapper>
        </Container>
    );
}
