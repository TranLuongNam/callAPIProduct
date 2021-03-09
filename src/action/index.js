import { ADD_PRODUCT, DELETE_ALL_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FETCH_PRODUCTS, UPDATE_PRODUCT } from "../constants/ActionTypes"
import callApi from "../utils/apiCaller"


export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', "GET", null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}
export const actFetchProducts = (products) => {
    return {
        type: FETCH_PRODUCTS,
        payload: products
    }
}
export const actDeleteProductrRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}
export const actDeleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        id
    }
}
export const actAddProductRequest = (product) => {
    return dispatch => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data))
        })
    }
}

export const actGetProduct = (product) => {
    return {
        type: EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data))
        })
    }

}

export const actUpdateProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
        product
    }
}

export const actDeleteAllProductRequest = (product) => {
    return dispatch => {
        return callApi("products", "DELETE", product).then(res => {
            dispatch(actDeleteAllProduct(product))
        })
    }
}

export const actDeleteAllProduct = (product) => {
    return {
        type: DELETE_ALL_PRODUCT,
        product
    }
}