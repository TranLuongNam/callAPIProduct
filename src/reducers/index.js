import { combineReducers } from "redux";
import products from "./products.js";
import itemEditing from "./itemEditing.js";
const rootReducer = combineReducers({
    products,
    itemEditing,
});

export default rootReducer;
