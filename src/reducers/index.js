import changeNum from "./upDown";
import mulDiv from "./muldiv";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNum,
  mulDiv,
});

export default rootReducer;
