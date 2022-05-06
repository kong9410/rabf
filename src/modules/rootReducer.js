import { combineReducers } from "redux";
import signup from "./signup";
import signin from "./signin";

const rootReducer = combineReducers({
    signin,
    signup
});

export default rootReducer;