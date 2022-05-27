import { legacy_createStore, combineReducers } from "redux";
import userReducer from "./Modules/User/reducers";

const reducer = combineReducers({ user: userReducer });
const store = legacy_createStore(reducer);

export default store;
