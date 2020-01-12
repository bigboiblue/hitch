import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "./styles/SidebarStyles";
import DropSelect from "../../../utility_components/DropSelect";
import { getAllGroupNames as getAllGroupNamesAction, setCurrentGroup as setCurrentGroupAction } from "../../../actions/groupsActions";

interface Props {
    allGroups?: string[];
    currentGroup?: string;
    getAllGroupNames?: () => any;
    setCurrentGroup?: (groupName: string) => any;
    flags?: FlagData[];
}

function Sidebar(props: Props): React.ReactElement {
    if (props.allGroups.length !== 0 && typeof props.currentGroup !== "string") {
        props.setCurrentGroup(props.allGroups[0]);
    }

    useEffect(() => {
        props.getAllGroupNames();
    }, [props.flags]);


    return (
        <Container>
            <DropSelect title="Feature Groups ↓" items={props.allGroups || []} handleSelect={props.setCurrentGroup} current={props.currentGroup} />
        </Container>
    );
}


const mapStateToProps = (state) => (
    { allGroups: state.groups.allGroups, currentGroup: state.groups.currentGroup, flags: state.flags });
const mapDispatchToProps = {
    getAllGroupNames: getAllGroupNamesAction,
    setCurrentGroup: setCurrentGroupAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
