import React from "react";
import { Wrapper, TitleContainer } from "./styles/MenuItemStyles";
import { MenuItemTheme } from "../styles/GlobalUserTheme";
import ControlPanelIcon from "../assets/svg_icons/ControlPanelIcon";

interface Props {
    menuItemData: MenuItemData;
    theme: MenuItemTheme;
}

export default function MenuItem(props: Props): React.ReactElement {
    let {
        title, callback,
    } = props.menuItemData;


    return (
        <Wrapper onClick={callback} theme={props.theme}>
            <TitleContainer theme={props.theme}>
                <p>{title}</p>
            </TitleContainer>
        </Wrapper>
    );
}
