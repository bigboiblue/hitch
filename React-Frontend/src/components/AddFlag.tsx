import React, { useState } from "react";
import axios from "axios";
import PopupForm from "../utility_components/PopupForm";
import { Button } from "./styles/AddFlagStyles";

export default function AddFlag(): React.ReactElement {
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
        axios.post("http://localhost:8081/api/v1/flags/add", modifiedFlagData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
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
