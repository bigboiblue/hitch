import React from "react";
import { Wrapper, TitleContainer } from "../styles/MenuItemStyles";

type Action = (any?) => {type: string; payload: Record<string, any>}
interface Props {
    title: string;
    action: Action;
}

export default function MenuItem(props: Props): React.ReactElement {
    return (
        <Wrapper onClick={props.action}>
            <TitleContainer>
                <p>{props.title}</p>
            </TitleContainer>
        </Wrapper>
    );
}
