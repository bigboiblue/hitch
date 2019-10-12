import React from "react";
import uuid from "uuid/v4";
import MenuItem from "./MenuItem";
import DropDownMenuImplementation from "./DropDownMenuImplementation";

interface Props {
    position: {left: number; top: number};
    menuItems: MenuItem[];
}

export default function DropDownMenu(props: Props): React.ReactElement {
    let instanceUUID = useRef(uuid());
}
