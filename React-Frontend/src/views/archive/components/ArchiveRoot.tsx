import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllFlags as getAllFlagsAction, toggleArchiveFlag as toggleArchiveFlagAction } from "../../../actions/flagsActions";
import Table from "../../../utility_components/Table";
import { Container, TableWrapper, Button } from "./styles/ArchiveRootStyles";

interface Props {
    currentApplication: string; //uuid of the current Application (convert to title for title)
    flags?: FlagData[]; //Archived flags from redux store
    getAllFlags?: (flagData: Partial<FlagData>) => any;
    toggleArchiveFlag?: (flagData: Partial<FlagData>) => any;
}

function ArchiveRoot(props: Props): React.ReactElement {
    useEffect(() => {
        props.getAllFlags({ groupName: props.currentApplication, isArchived: true });
    }, []);


    let tableRowData;
    if (props.flags.length !== 0) {
        tableRowData = props.flags.map((value) => ({
            Name: <p>{value.name}</p>,
            Type: <p>{value.type}</p>,
            "Date Created": <p>{value.dateCreated.toString().slice(0, 10)}</p>,
            Enabled: <p>{value.isEnabled.toString()}</p>,
            Unarchive: <Button onClick={() => props.toggleArchiveFlag({ _id: value._id, isArchived: value.isArchived })}>unarchive</Button>,
        }));
    }

    return (
        // <Title>{props.currentApplication}</Title>
        <Container>
            <TableWrapper>
                <Table tableData={tableRowData} />
            </TableWrapper>
        </Container>
    );
}

const mapStateToProps = (state): any => ({ flags: state.flags });
const mapActionsToProps = {
    getAllFlags: getAllFlagsAction,
    toggleArchiveFlag: toggleArchiveFlagAction,
};
export default connect(mapStateToProps, mapActionsToProps)(ArchiveRoot);
