import React, {
    useContext, useEffect,
} from "react";
import { connect } from "react-redux";
import { Container, Title, FlagBoxContainer } from "./styles/ControlPanelRootStyles";
import FlagBox from "./FlagBox";
import { ThemeContext } from "../../../styles/GlobalUserTheme";
import AddFlag from "./AddFlag";
import { getAllFlags as getAllFlagsAction } from "../../../actions/flagsActions";

/** @return flagBoxes filtered by type */
function getFlagBoxes(flags: FlagData[]): React.ReactElement[] {
    let uniqueFlagTypes = [...new Set(flags.map((value) => value.type))];

    let flagBoxes: React.ReactElement[] = [];
    for (let i = 0; i < uniqueFlagTypes.length; ++i) {
        const filteredFlags = flags.filter((value) => value.type === uniqueFlagTypes[i]);
        flagBoxes.push(
            <FlagBox key={i} flagsData={filteredFlags} />,
        );
    }
    return flagBoxes;
}

interface Props {
    currentApplication: string; //TODO: MONGO change this to uid of application, and hold name in DB
    flags?: FlagData[];
    getAllFlags?: (flagData: Partial<FlagData>) => any;
}

function ControlPanelRoot(props: Props): React.ReactElement {
    let theme = useContext(ThemeContext).main;

    //Like componentDidMount because of empty dependency list
    useEffect(() => {
        props.getAllFlags({ groupName: props.currentApplication, isArchived: false });
    }, []);

    let flagBoxes = getFlagBoxes(props.flags);

    //TODO: BIG REDUX At some point completely redo architecture of dropdown/context menu so that it
    //renders here. MenuItems and styling would be obtained from redux store. Maybe this would
    //warrent rewriting all components to make better use of redux;
    return (
        <Container theme={theme}>
            <Title theme={theme}>{props.currentApplication} - <u>Control Panel</u></Title>
            <FlagBoxContainer>
                {flagBoxes}
                <AddFlag />
            </FlagBoxContainer>
        </Container>
    );
}

const mapStateToProps = (state): any => ({ flags: state.flags });

const mapActionsToProps = { getAllFlags: getAllFlagsAction };

export default connect(mapStateToProps, mapActionsToProps)(ControlPanelRoot);
