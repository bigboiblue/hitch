import React from "react";
import LoginWidget from "./LoginWidget";
import MenuItem from "../MenuItem";
import { Container, Spacer, MenuItemContainer } from "../../components/styles/NavBarStyles";
import { ThemeType } from "../../styles/GlobalUserTheme";

interface Props {
    theme: ThemeType["navbar"];
    menuItemData: MenuItemData[];
}


export default function NavBar(props: Props): React.ReactElement {
    return (
        <Container theme={props.theme}>
            <Spacer />
            <MenuItemContainer theme={props.theme}>
                {props.menuItemData.map(
                    (value) => (
                        <MenuItem
                            key={value.title}
                            menuItemData={value}
                            theme={props.theme.menuItem}
                        />
                    ),
                )}
            </MenuItemContainer>
            {/* <LoginWidget /> SPACER IS TEMP */}
            <Spacer />
        </Container>
    );
}
