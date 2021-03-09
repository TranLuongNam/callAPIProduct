import { ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS, UPDATE_PRODUCT } from "../constants/ActionTypes";

const initialState = [];
var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

const products = (state = initialState, action) => {
    var index = -1;
    var { id, product } = action;
    switch (action.type) {
        case FETCH_PRODUCTS:
            state = action.payload;
            return [...state];
        case DELETE_PRODUCT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case ADD_PRODUCT:
            state.push(product)
            return [...state];
        case UPDATE_PRODUCT:
            index = findIndex(state, product.id)
            state[index] = product;
            return [...state]
        default:
            return [...state];
    }
};
export default products;
