const enum ActionTypes {
    GET_ALL_FLAGS = "flags:getAllFlags",
    UPDATE_FLAG = "flags:updateFlag",
    ADD_FLAG = "flags:addFlag",
    ARCHIVE_FLAG = "flags:archiveFlag",
    REMOVE_FLAG = "flags:removeFlag",
    UPDATE_MANY_FLAGS = "flags:updateManyFlags",
    ADD_MANY_FLAGS = "flags:addManyFlags",
}

// TODO: REDUX make all thunk
//TODO: REDUX make error action and stack

export function getAllFlags(): Action {
    return {
        type: ActionTypes.GET_ALL_FLAGS,
    };
}

export function updateFlag(flagData: Partial<FlagData>): Action {
    return {
        type: ActionTypes.UPDATE_FLAG,
        payload: flagData,
    };
}

export function addFlag(flagData: Partial<FlagData>): Action {
    return {
        type: ActionTypes.ADD_FLAG,
        payload: flagData,
    };
}

export function archiveFlag(id: string): Action {
    return {
        type: ActionTypes.ARCHIVE_FLAG,
        payload: id,
    };
}

export function removeFlag(id: string): Action {
    return {
        type: ActionTypes.REMOVE_FLAG,
        payload: id,
    };
}

export function updateManyFlags(allFlagData: Partial<FlagData>[]): Action {
    return {
        type: ActionTypes.UPDATE_MANY_FLAGS,
        payload: allFlagData,
    };
}

export function addManyFlags(allFlagData: Partial<FlagData>[]): Action {
    return {
        type: ActionTypes.ADD_MANY_FLAGS,
        payload: allFlagData,
    };
}
