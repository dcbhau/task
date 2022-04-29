import * as ActionTypes from "../actionTypes";


const initialState = {
    products:[],
    singleProduct:{}
}

export const productReducer = ( state=initialState , action) => 
{
    switch(action.type)
    {
        case ActionTypes.GET_PRODUCTS:
            return{
                ...state
            }
        case ActionTypes.ADD_PRODUCT:
            const obj = action.payload;
            obj.id = Date.now();
            return{
                ...state,
                products:[...state.products,obj]
            }
        case ActionTypes.UPDATE_PRODUCT:
            return{
                ...state,
                products:state.products.map((product) => {
                    if(parseInt(product.id) === parseInt(action.payload.id))
                    return{
                        ...product,
                        p_name:action.payload.p_name,
                        p_price:action.payload.p_price,
                        p_description:action.payload.p_description,
                        p_category:action.payload.p_category
                    }
                    return product;
                })
            }
        case ActionTypes.DELETE_PRODUCT:
            return{
                ...state,
                products: state.products.filter((product) => product.id !== action.payload)
            }
        case ActionTypes.GET_PRODUCT_BY_ID:
            const index = state.products.findIndex((product) => parseInt(product.id) === parseInt(action.payload))
            return{
                ...state,
                singleProduct:state.products[index]
            }
        default:
            return state;
    }
}
