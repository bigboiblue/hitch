import React, { useState } from "react";
import { connect } from "react-redux";
import PopupForm from "../../../utility_components/PopupForm";
import { Button } from "./styles/AddFlagStyles";
import { addFlag as addFlagAction } from "../../../actions/flagsActions";


interface Props {
    addFlag?: (flagData: FlagData) => any;
}

function AddFlag(props: Props): React.ReactElement {
    let [isFormVisible, setIsFormVisible] = useState(false);

    function addFlagToDatabase(flagData: Partial<FlagData>): void {
        const keys = Object.keys(flagData);
        const values = Object.values(flagData);
        const modifiedFlagData: Partial<FlagData> = {};
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].toUpperCase() === "NAME") modifiedFlagData.name = values[i] as string;
            if (keys[i].toUpperCase() === "NEW NAME") modifiedFlagData.name = values[i] as string;
            if (keys[i].toUpperCase() === "GROUP") modifiedFlagData.groupName = values[i] as string;
            if (keys[i].toUpperCase() === "TYPE") modifiedFlagData.type = values[i] as string;
            if (keys[i].toUpperCase() === "ENABLED") modifiedFlagData.isEnabled = values[i] as boolean;
        }
        modifiedFlagData.dateCreated = new Date();
        modifiedFlagData.isEnabled = false;
        modifiedFlagData.isArchived = false;
        console.log(modifiedFlagData);
        props.addFlag(modifiedFlagData as FlagData);
    }

    const formTitle = "Add New Flag";
    const formData = [
        { title: "Name" },
        { title: "Group" },
        { title: "Type" },
    ];

    return (
        <>
            <PopupForm
                isVisible={isFormVisible}
                handleVisibility={() => setIsFormVisible(!isFormVisible)}
                title={formTitle}
                submitCallback={addFlagToDatabase}
                submitButtonTitle="Add"
                formData={formData}
            />
            <Button onClick={() => setIsFormVisible(!isFormVisible)}>Add New Flag</Button>
        </>
    );
}

const mapActionsToProps = {
    addFlag: addFlagAction,
};

export default connect(null, mapActionsToProps)(AddFlag);
