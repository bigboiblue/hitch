import { combineReducers } from "redux";
import flagReducer from "./flagsReducer";
import userReducer from "./userReducer";
import groupsReducer from "./groupsReducer";

const allReducer = combineReducers({
    user: userReducer,
    flags: flagReducer,
    groups: groupsReducer,
});

export default allReducer;
