import { combineReducers } from "redux";
import shoppingReducer from "./shopping/reducer";

const rootReducer = combineReducers({
  shopping: shoppingReducer,
});

export default rootReducer;
