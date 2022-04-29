import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductById } from '../../../store/action';

const Product = () => {
    
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();
    const deleteProduct = (id) => 
    {
        dispatch(deleteProductById(id));
    }
    const renderList = products.map((product) => (
            <div className="col-4" key={product.id}>
                
                        <div className="card">
                            <div className="card-body">
                                    <h5 className="card-title">{product.p_name}</h5>
                                    <p className='card-text'>Price: ${product.p_price}</p>
                                    <p className="card-text">{product.p_category}</p>
                            </div>
                            <div className='card-footer'>
                                <Link to={'/edit-product/' + product.id }><button className='btn btn-secondary'>Update</button></Link>
                                <button onClick={() => deleteProduct(product.id)} className='btn btn-danger ml-3'>Delete</button>
                            </div>

                        </div>
        
            </div>
    ))
    const addProduct = (
        <div className='container'>
            {products.length === 0 ? (<h4>No products available</h4>) : null}
            <Link to="/add-product"><button className='btn btn-primary'>Add Product</button></Link>
        </div>
    )
  return (
    <>
        {renderList}
        {addProduct}
    </>
  )
}

export default Product;