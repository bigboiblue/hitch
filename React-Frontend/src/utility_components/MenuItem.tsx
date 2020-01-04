import React from "react";
import { withRouter } from "react-router-dom";
import { Wrapper, TitleContainer } from "./styles/MenuItemStyles";
import { MenuItemTheme } from "../styles/GlobalUserTheme";

interface Props {
    menuItemData: MenuItemData;
    theme: MenuItemTheme;
    history?: string[];
}

function MenuItem(props: Props): React.ReactElement {
    let {
        title, callback,
    } = props.menuItemData;


    return (
        <Wrapper onClick={() => callback(props.history)} theme={props.theme}>
            <TitleContainer theme={props.theme}>
                <p>{title}</p>
            </TitleContainer>
        </Wrapper>
    );
}

export default withRouter(MenuItem);
