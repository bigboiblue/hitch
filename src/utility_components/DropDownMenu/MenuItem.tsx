import React from "react";
import { Wrapper, TitleContainer } from "../styles/MenuItemStyles";

type Action = (any?) => { type: string; payload: Record<string, any> }
interface Props {
    menuItemData: MenuItemData;
}

export default function MenuItem(props: Props): React.ReactElement {
    let {
        title, color, backgroundColor, action,
    } = props.menuItemData;

    return (
        <Wrapper onClick={action}>
            <TitleContainer>
                <p>{title}</p>
            </TitleContainer>
        </Wrapper>
    );
}
