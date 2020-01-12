import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { getAllFlags as getAllFlagsAction, toggleArchiveFlag as toggleArchiveFlagAction, deleteFlag as deleteFlagAction } from "../../../actions/flagsActions";
import Table from "../../../utility_components/Table";
import {
    Container, TableWrapper, Button, Title,
} from "./styles/ArchiveRootStyles";
import { ThemeContext } from "../../../styles/GlobalUserTheme";

interface Props {
    currentGroup?: string; //uuid of the current Application (convert to title for title)
    flags?: FlagData[]; //Archived flags from redux store
    getAllFlags?: (flagData: Partial<FlagData>) => any;
    toggleArchiveFlag?: (flagData: Partial<FlagData>) => any;
    deleteFlag?: (id: string) => any;
}

function ArchiveRoot(props: Props): React.ReactElement {
    let theme = useContext(ThemeContext);

    useEffect(() => {
        if (props.currentGroup.length !== 0) {
            props.getAllFlags({ groupName: props.currentGroup, isArchived: true });
        }
    }, [props.currentGroup]);


    let tableRowData;
    // @ts-ignore
    if (!props.flags.error && props.flags.length !== 0 && props.flags[0].dateArchived) {
        console.log("dwoiauhdwaiuh");
        tableRowData = props.flags.map((value) => ({
            Name: <p>{value.name}</p>,
            Type: <p>{value.type}</p>,
            "Date Created": <p>{value.dateCreated.toString().slice(0, 10)}</p>,
            "Date Archived": <p>{value.dateArchived.toString().slice(0, 10)}</p>,
            Unarchive: <Button theme={theme.main.button} onClick={() => props.toggleArchiveFlag({ _id: value._id, isArchived: value.isArchived })}>unarchive</Button>,
            Delete: <Button theme={theme.main.button} onClick={() => props.deleteFlag(value._id)}><u>delete</u></Button>,
        }));
    }

    return (
        <Container theme={theme.main}>
            <Title theme={theme.main}>{props.currentGroup} - <u>Archive</u></Title>
            <TableWrapper>
                <Table tableData={tableRowData} theme={theme.table} />
            </TableWrapper>
        </Container>
    );
}

const mapStateToProps = (state): any => ({ flags: state.flags, currentGroup: state.groups.currentGroup });
const mapActionsToProps = {
    getAllFlags: getAllFlagsAction,
    toggleArchiveFlag: toggleArchiveFlagAction,
    deleteFlag: deleteFlagAction,
};
export default connect(mapStateToProps, mapActionsToProps)(ArchiveRoot);
