import { combineReducers } from "redux";
import flagReducer from "./flagsReducer";
import userReducer from "./userReducer";

const allReducer = combineReducers({
    user: userReducer,
    flags: flagReducer,
});

export default allReducer;
