import React from "react";
import LoginWidget from "./LoginWidget";
import { Container, Spacer, MenuItemContainer } from "../styles/NavBarStyles";


interface Props {
    type: "horizontal" | "vertical";
    /** A floating point number representing the width / height of the navbar in rem */
    size: number;
    menuItems: MenuItemData[];
}

export default function NavBar(props: Props): React.ReactElement {
    const menuItems = "Hello";

    return (
        <Container size={4.5} type={props.type}> {/*flex*/}
            <Spacer />
            <MenuItemContainer>
                {menuItems}
            </MenuItemContainer>
            {/* <LoginWidget /> SPACER IS TEMP */}
            <Spacer />
        </Container>
    );
}
