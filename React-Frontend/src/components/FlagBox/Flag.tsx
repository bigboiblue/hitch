import React, { useState, useContext } from "react";
import { findDOMNode } from "react-dom";
import axios, { AxiosResponse } from "axios";
import {
    Container, Title, SwitchWrapper, KebabMenuWrapper,
} from "../styles/FlagStyles";

import Switch from "../../utility_components/Switch";
import KebabMenu from "../../utility_components/KebabMenu";
import { ThemeContext } from "../../styles/GlobalUserTheme";
import PopupForm from "../../utility_components/PopupForm";

interface Props {
    flagData: FlagData;
}


export default function Flag(props: Props): React.ReactElement {
    let [flagData, setFlagData] = useState(props.flagData);
    let {
        _id, name, type, dateCreated, groupName, isEnabled,
    } = flagData;
    let [isFlagEnabled, setIsFlagEnabled] = useState(props.flagData.isEnabled);
    let [formData, setFormData] = useState(undefined);
    let [formTitle, setFormTitle] = useState("");
    let theme = useContext(ThemeContext).flagBox.flag;

    async function updateFlagInDatabase(dataToModify: Partial<FlagData>): Promise<void> {
        axios.put(`http://localhost:8081/api/v1/flags/${_id}`, dataToModify, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const menuItems: MenuItemData[] = [
        { title: "Rename", callback: () => { setFormTitle("Rename Flag"); setFormData([{ title: "New Name", default: name }]); } },
        {
            title: "Edit",
            callback: () => {
                setFormTitle("Edit Flag Info");
                setFormData([
                    { title: "Name", default: name },
                    { title: "Group", default: groupName },
                    { title: "Type", default: type },
                ]);
            },
        },
        { title: "Archive", callback: () => { } },
    ];

    function submitFormCallback(data: any) {
        const keys = Object.keys(data);
        const values = Object.values(data);
        const modifiedFlagData = {};
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].toUpperCase() === "NAME") modifiedFlagData.name = values[i];
            if (keys[i].toUpperCase() === "NEW NAME") modifiedFlagData.name = values[i];
            if (keys[i].toUpperCase() === "GROUP") modifiedFlagData.groupName = values[i];
            if (keys[i].toUpperCase() === "TYPE") modifiedFlagData.type = values[i];
            if (keys[i].toUpperCase() === "ENABLED") modifiedFlagData.isEnabled = values[i];
        }
        updateFlagInDatabase(modifiedFlagData);
        // TODO: Setflagdata has to be a redux action and flagData should be passed as props. This would allow rerendering of mainContainer and flagboxes
        setFlagData({ flagData, ...modifiedFlagData });
    }

    return (
        <>
            <PopupForm
                isVisible={Boolean(formData)}
                title={formTitle}
                formData={formData || []}
                handleVisibility={() => {
                    if (formData) setFormData(undefined);
                    else setFormData(formData);
                }}
                submitCallback={submitFormCallback}
                submitButtonTitle={formTitle === "Rename Flag" ? "Rename" : undefined}
            />
            <Container theme={theme}>
                <SwitchWrapper>
                    <Switch
                        isEnabled={isFlagEnabled}
                        handleToggle={
                            () => updateFlagInDatabase({ isEnabled: !isFlagEnabled })
                                .then(() => setIsFlagEnabled(!isFlagEnabled))
                        }
                        theme={theme.switch}
                    />
                </SwitchWrapper>
                <Title key={_id} theme={theme}>{name}</Title>
                <KebabMenuWrapper>
                    <KebabMenu menuItemData={menuItems} theme={theme.kebabMenu} />
                </KebabMenuWrapper>
            </Container>
        </>
    );
}
