import * as ActionTypes from './actionTypes';

export const getallProducts = () => 
{
    return{
        type:ActionTypes.GET_PRODUCTS
    }
}
export const addProduct = (product) => 
{
    return{
        type:ActionTypes.ADD_PRODUCT,
        payload:product
    }
}
export const getProductById = (id) => 
{
    return{
        type:ActionTypes.GET_PRODUCT_BY_ID,
        payload:id
    }
}
export const deleteProductById = (id) => {
    return{
        type:ActionTypes.DELETE_PRODUCT,
        payload:id
    }
}
export const updateProduct = (product) =>
{
    return{
        type:ActionTypes.UPDATE_PRODUCT,
        payload:product
    }
}