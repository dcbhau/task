import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Product from "./Product/Product";
import { getallProducts } from "../../store/action";

const Products = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getallProducts());
    },
    []);
    return(
        <div className="container">
            <div className="row">
                <Product/>
            </div>
        </div>
    )
}
export default Products;