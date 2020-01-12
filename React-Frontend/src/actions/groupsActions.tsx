import axios from "axios";
import { Dispatch, AnyAction } from "redux";
type AsyncAction = (dispatch: Dispatch<AnyAction>) => Promise<void>;


export enum ActionTypes {
    GET_ALL_GROUP_NAMES = "groups:getAllGroupNames",
    SET_CURRENT_GROUP = "groups:setCurrentGroup",
    ERROR = "groups:error",
}

export function getAllGroupNames(): AsyncAction {
    return async (dispatch) => {
        try {
            const groups: string[] = (await axios.get("http://localhost:28191/api/v1/groups", { responseType: "json" })).data;
            dispatch({
                type: ActionTypes.GET_ALL_GROUP_NAMES,
                payload: groups,
            });
        } catch (e) {
            dispatch({
                type: ActionTypes.ERROR,
                payload: `Cannot get all group names, error: ${e}`,
            });
        }
    };
}

export function setCurrentGroup(groupName: string): AnyAction {
    return {
        type: ActionTypes.SET_CURRENT_GROUP,
        payload: groupName,
    };
}
