import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { productQuentyChecker } from "./middlewares";

const store = createStore(rootReducer, applyMiddleware(productQuentyChecker));

export default store;
