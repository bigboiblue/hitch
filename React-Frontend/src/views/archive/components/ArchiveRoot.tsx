import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllFlags as getAllFlagsAction, toggleArchiveFlag as toggleArchiveFlagAction } from "../../../actions/flagsActions";


interface Props {
    currentApplication: string; //uuid of the current Application (convert to title for title)
    flags?: FlagData[]; //Archived flags from redux store
    getAllFlags?: (flagData: Partial<FlagData>) => any;
}

function ArchiveRoot(props: Props): React.ReactElement {
    useEffect(() => {
        props.getAllFlags({ groupName: props.currentApplication, isArchived: true });
    }, []);

    return (
        <div>
            <ul>
                {props.flags.map((value) => <li key={value._id}>{value.name}</li>)}
            </ul>
        </div>
    );

    // const tableItems = props.flags.map(value => <TableRow tableData={value} />)

    // return (
    //     <Title>{props.currentApplication}</Title>
    //     <Table headings={headings}>
    //         {tableItems}
    //     </Table>
    // );
}

const mapStateToProps = (state) => ({ flags: state.flags });
const mapActionsToProps = {
    getAllFlags: getAllFlagsAction,
    toggleArchiveFlag: toggleArchiveFlagAction,
};
export default connect(mapStateToProps, mapActionsToProps)(ArchiveRoot);
