import { EDIT_PRODUCT } from "../constants/ActionTypes";

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

export default itemEditing;