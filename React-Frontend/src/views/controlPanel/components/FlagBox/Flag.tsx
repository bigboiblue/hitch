import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import {
    Container, Title, SwitchWrapper, KebabMenuWrapper, DateAdded,
} from "../styles/FlagStyles";

import Switch from "../../../../utility_components/Switch";
import KebabMenu from "../../../../utility_components/KebabMenu";
import { ThemeContext } from "../../../../styles/GlobalUserTheme";
import PopupForm from "../../../../utility_components/PopupForm";
import { updateFlag as updateFlagAction, toggleArchiveFlag as toggleArchiveFlagAction } from "../../../../actions/flagsActions";


interface Props {
    flagData: FlagData;
    updateFlag?: (flagData: Partial<FlagData>) => any;
    toggleArchiveFlag?: (flagData: Partial<FlagData>) => any;
}

//TODO: ARCHIVE should be ordered by date archived, should show as a table with type in table (not filtered by type). To enable flag, unarchive

function Flag(props: Props): React.ReactElement {
    let [formData, setFormData] = useState(undefined);
    let [formTitle, setFormTitle] = useState("");
    let theme = useContext(ThemeContext).flagBox.flag;

    let {
        _id, name, groupName, isEnabled, type, dateCreated, isArchived,
    } = props.flagData;

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
        { title: "Archive", callback: () => { props.toggleArchiveFlag(props.flagData); } },
    ];

    function submitFormCallback(data: any): void {
        const keys = Object.keys(data);
        const values = Object.values(data);
        const modifiedFlagData: Partial<FlagData> = { _id };

        for (let i = 0; i < keys.length; i++) {
            if (keys[i].toUpperCase() === "NAME") modifiedFlagData.name = values[i] as string;
            if (keys[i].toUpperCase() === "NEW NAME") modifiedFlagData.name = values[i] as string;
            if (keys[i].toUpperCase() === "GROUP") modifiedFlagData.groupName = values[i] as string;
            if (keys[i].toUpperCase() === "TYPE") modifiedFlagData.type = values[i] as string;
            if (keys[i].toUpperCase() === "ENABLED") modifiedFlagData.isEnabled = values[i] as boolean;
        }
        props.updateFlag(modifiedFlagData);
    }

    return (
        <>
            <PopupForm
                isVisible={Boolean(formData)} //If formData is defined: visible
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
                        isEnabled={props.flagData.isEnabled}
                        handleToggle={
                            () => props.updateFlag({ _id, isEnabled: !props.flagData.isEnabled })
                        }
                        theme={theme.switch}
                    />
                </SwitchWrapper>
                <Title key={_id} theme={theme}>{name}</Title>
                <DateAdded key={_id} theme={theme}>Created: {dateCreated.toString().slice(0, 10)}</DateAdded>
                <KebabMenuWrapper>
                    <KebabMenu menuItemData={menuItems} theme={theme.kebabMenu} />
                </KebabMenuWrapper>
            </Container>
        </>
    );
}

const mapActionsToProps = {
    updateFlag: updateFlagAction,
    toggleArchiveFlag: toggleArchiveFlagAction,
};

export default connect(null, mapActionsToProps)(Flag);
