import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, getProductById } from "../../store/action";
import {  useNavigate, useParams } from "react-router-dom";

const EditProduct = () => 
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector(status => status.allProducts.singleProduct)
    const location = useParams();
    const [formData,setFormData] = useState({
        p_name:"",
        p_price:0,
        p_description:"",
        p_category:''
    })
    
    const update = (e) => 
    {
        const payload = {...formData};
        payload.id = location.id
        e.preventDefault();
        dispatch(updateProduct(payload));
        navigate("/")

    }
    const changed = (e) => 
    {
        setFormData({...formData , [e.target.name]:e.target.value});
    }

    useEffect(() => {
        dispatch(getProductById(location.id))
        setFormData({
            p_name:product.p_name,
            p_price:product.p_price,
            p_description:product.p_description,
            p_category:product.p_category
        })
        return(
            ()=>{
                setFormData({
                    p_name:"",
                    p_price:0,
                    p_description:"",
                    p_category:""
                })
            }
        )
    },[product])

    return(
        <div className="container">
            <h3>Edit Product</h3>
            <hr/>
            <form className="form_Add_Products" onSubmit={update}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input value={formData.p_name} name="p_name" onChange={changed} type ="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Product Price</label>
                    <input value={formData.p_price} name="p_price" onChange={changed} type="number" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Product Descrption</label>
                    <textarea value={formData.p_description} name="p_description" onChange={changed}  rows={6} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Product Category</label>
                    <select className="form-control" name="p_category" value={formData.p_category} onChange={changed} >
                        <option defaultValue='0'>Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Cloths">Cloths</option>
                        <option value="Home appliances">Home appliances</option>
                        <option value="Jewellery">Jewellery</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
export default EditProduct;