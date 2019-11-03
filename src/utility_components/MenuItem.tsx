import React from "react";
import { Wrapper, TitleContainer } from "./styles/MenuItemStyles";
import { MenuItemTheme } from "../styles/GlobalUserTheme";
import ControlPanelIcon from "../assets/svg_icons/ControlPanelIcon";

type Action = (any?) => { type: string; payload: Record<string, any> }
interface Props {
    menuItemData: MenuItemData;
    theme: MenuItemTheme;
}

export default function MenuItem(props: Props): React.ReactElement {
    let {
        title, action,
    } = props.menuItemData;

    return (
        <Wrapper onClick={action} theme={props.theme}>
            <TitleContainer theme={props.theme}>
                <p>{title}</p>
            </TitleContainer>
        </Wrapper>
    );
}
