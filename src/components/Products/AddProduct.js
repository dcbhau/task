import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/action";
import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';

// import { useFormik } from 'formik';
// import * as Yup from 'yup';

const AddProduct = () => 
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const formik = useFormik({
    //     initialValues:{
    //     p_name:'',
    //     p_price:0,
    //     p_description:'',
    //     p_category:""
    //     },
    // validationSchema: Yup.object({
    //     p_name:Yup.string()
    //     .required("Product name is Required"),
    //     p_price:Yup.number()
    //     .required("Price is Reuired"),
    //     p_description:Yup.string()
    //     .required('Description Required')
    //     .min(10,'description should be atleast 10 characters'),
    //     p_category:Yup.string()
    //     .required('Category is required')
    // }),
    // onSubmit:values => {
    //     alert(JSON.stringify(values,null,2));
    // }
    // });
    const [formData,setFormData] = useState({
        p_name:"",
        p_price:'',
        p_description:"",
        p_category:''
    })

    const addHandler = (e) => {
        dispatch(addProduct(formData));
        navigate("/")
    }


    const changed = (e) => {
        setFormData({...formData , [e.target.name]:e.target.value});
    }

    return(
        <div className="container">
            <h3>Add Product</h3>
            <hr/>
            <form className="form_Add_Products" onSubmit={handleSubmit(addHandler)}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input  {...register("p_name", { required: true })} value={formData.p_name}  onChange={changed} type ="text" className="form-control"/>
                    {errors.p_name?.type === 'required' && "Product name is required"}
                </div>
                <div className="form-group">
                    <label>Product Price</label>
                    <input {...register("p_price", { required: true })} value={formData.p_price}  onChange={changed} type="number" className="form-control"/>
                    {errors.p_price?.type === 'required' && "Product Price is required"}
                </div>
                <div className="form-group">
                    <label>Product Descrption</label>
                    <textarea {...register("p_description", { required: true })} value={formData.p_description} onChange={changed} name="p_description" rows={6} className="form-control"/>
                    {errors.p_description?.type === 'required' && "Product Description is required"}
                </div>
                <div className="form-group">
                    <label>Product Category</label>
                    <select {...register("p_category", { required: true })}  className="form-control" value={formData.p_category} onChange={changed} name="p_category">
                        <option value="">Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Cloths">Cloths</option>
                        <option value="Home appliances">Home appliances</option>
                        <option value="Jewellery">Jewellery</option>
                    </select>
                    {errors.p_category?.type === 'required' && "Please select Product category"}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddProduct