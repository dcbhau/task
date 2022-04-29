import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/action";
import { useNavigate } from "react-router-dom";
const AddProduct = () => 
{
    const dispatch = useDispatch();
   const navigate = useNavigate();
    
    const [formData,setFormData] = useState({
        p_name:"",
        p_price:0,
        p_description:"",
        p_category:''
    })
    const add = (e) => 
    {
        e.preventDefault();
        dispatch(addProduct(formData));
        setTimeout(() => {
            navigate("/")
        }, 1000);

    }
    const changed = (e) => 
    {
        setFormData({...formData , [e.target.name]:e.target.value});
    }

    return(
        <div className="container">
            <h3>Add Product</h3>
            <hr/>
            <form className="form_Add_Products" onSubmit={add}>
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
                    <textarea value={formData.p_description} onChange={changed} name="p_description" rows={6} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Product Category</label>
                    <select className="form-control" value={formData.p_category} onChange={changed} name="p_category">
                        <option defaultValue='0'>Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Cloths">Cloths</option>
                        <option value="Home appliances">Home appliances</option>
                        <option value="Jewellery">Jewellery</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddProduct