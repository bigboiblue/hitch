import axios from "axios";
import { Dispatch, AnyAction } from "redux";
type AsyncAction = (dispatch: Dispatch<AnyAction>) => Promise<void>;


export enum ActionTypes {
    GET_ALL_FLAGS = "flags:getAllFlags",
    UPDATE_FLAG = "flags:updateFlag",
    ADD_FLAG = "flags:addFlag",
    TOGGLE_ARCHIVE_FLAG = "flags:toggleArchiveFlag",
    DELETE_FLAG = "flags:deleteFlag",
    UPDATE_MANY_FLAGS = "flags:updateManyFlags",
    ADD_MANY_FLAGS = "flags:addManyFlags",
    ERROR = "flags:error",
}

// TODO: REDUX make all thunk
//TODO: REDUX make error action and stack

export function getAllFlags(matchFlagFields: Partial<FlagData>): AsyncAction {
    let { groupName, isArchived } = matchFlagFields;

    return async (dispatch) => {
        try {
            const flags: FlagData[] = (await axios.get(`http://localhost:8081/api/v1/flags?groupName=${groupName}&isArchived=${isArchived}`, { responseType: "json" })).data;
            dispatch({
                type: ActionTypes.GET_ALL_FLAGS,
                payload: flags,
            });
        } catch (e) {
            dispatch({
                type: ActionTypes.ERROR,
                payload: `ERROR: Could not get all flags: ${e}`,
            });
        }
    };
}

export function updateFlag(flagData: Partial<FlagData>): AsyncAction {
    return async (dispatch) => {
        try {
            await axios.put(`http://localhost:8081/api/v1/flags/${flagData._id}`, flagData, { headers: { "Content-Type": "application/json" } });
            dispatch({
                type: ActionTypes.UPDATE_FLAG,
                payload: flagData,
            });
        } catch (e) {
            dispatch({
                type: ActionTypes.ERROR,
                payload: `ERROR: Could not update flag with id ${flagData._id}: ${e}`,
            });
        }
    };
}

//TODO: Addflag action for instant update
export function addFlag(flagData: Partial<FlagData>): AsyncAction {
    return {
        type: ActionTypes.ADD_FLAG,
        payload: flagData,
    };
}

export function toggleArchiveFlag(flagData: Partial<FlagData>): AsyncAction {
    let { _id, isArchived } = flagData;

    return async (dispatch) => {
        try {
            await axios.put(`http://localhost:8081/api/v1/flags/archive/${_id}`, { isArchived: !isArchived, isEnabled: false }, { headers: { "Content-Type": "application/json" } });
            dispatch({
                type: ActionTypes.TOGGLE_ARCHIVE_FLAG,
                payload: _id,
            });
        } catch (e) {
            dispatch({
                type: ActionTypes.ERROR,
                payload: `ERROR: Could not archive flag with id ${_id}: ${e}`,
            });
        }
    };
}

export function deleteFlag(id: string): AsyncAction {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:8081/api/v1/flags/${id}`, { headers: { "Content-Type": "application/json" } });
            dispatch({
                type: ActionTypes.DELETE_FLAG,
                payload: id,
            });
        } catch (e) {
            dispatch({
                type: ActionTypes.ERROR,
                payload: `ERROR: Could not delete flag with id ${id}: ${e}`,
            });
        }
    };
}

export function updateManyFlags(allFlagData: Partial<FlagData>[]): AsyncAction {
    return {
        type: ActionTypes.UPDATE_MANY_FLAGS,
        payload: allFlagData,
    };
}

export function addManyFlags(allFlagData: Partial<FlagData>[]): AsyncAction {
    return {
        type: ActionTypes.ADD_MANY_FLAGS,
        payload: allFlagData,
    };
}
