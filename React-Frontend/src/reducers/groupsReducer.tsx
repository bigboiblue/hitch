import { combineReducers } from "redux";
import { ActionTypes } from "../actions/groupsActions";


function allGroupReducer(state: FlagData[] = [], { type, payload }): Record<string, any> {
    switch (type) {
    case ActionTypes.GET_ALL_GROUP_NAMES:
        return payload; //Should be an array of groupNames
        break;
    default:
        return state;
        break;
    }
}

function currentGroupReducer(state: FlagData[] = [], { type, payload }): Record<string, any> {
    switch (type) {
    case ActionTypes.SET_CURRENT_GROUP:
        return payload; //Should be an array of groupNames
        break;
    default:
        return state;
        break;
    }
}

const groupsReducer = combineReducers({
    currentGroup: currentGroupReducer,
    allGroups: allGroupReducer,
});

export default groupsReducer;
