import { ActionTypes } from "../actions/flagsActions";

/** state = state.flags  */
function flagsReducer(state: FlagData[] = [], { type, payload }): Record<string, any> {
    switch (type) {
    case ActionTypes.GET_ALL_FLAGS:
        return payload;
        break;
    case ActionTypes.UPDATE_FLAG:
        return state.map((value) => (value._id === payload._id ? { ...value, ...payload } : value));
        break;
    case ActionTypes.TOGGLE_ARCHIVE_FLAG:
        return state.filter((value) => value._id !== payload);
        break;
    //TODO: Upon delete flag, if last flag in a group, remove the group
    case ActionTypes.DELETE_FLAG:
        return state.filter((value) => value._id !== payload);
        break;
    default:
        return state;
        break;
    }
}

export default flagsReducer;
