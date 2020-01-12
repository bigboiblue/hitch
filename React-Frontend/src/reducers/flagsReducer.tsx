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
    //TODO: If last flag on page, change to another feature group (Or stop error when selecting unknown group)
    case ActionTypes.DELETE_FLAG:
        return state.filter((value) => value._id !== payload);
        break;
    case ActionTypes.ADD_FLAG:
        return payload.groupName === state[0].groupName ? [...state, payload] : [...state];
        break;
    default:
        return state;
        break;
    }
}

export default flagsReducer;
