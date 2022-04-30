import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductById } from '../../../store/action';
import DataTable from 'react-data-table-component';
import { AiFillEdit,AiFillDelete } from "react-icons/ai";

const Product = () => {
    
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();
    const deleteProduct = (id) => 
    {
        dispatch(deleteProductById(id));
    }
    const columns = [ 
        {
            name:'Id',
            selector:row => row.id,
            sortable: true,
            reorder:true
        },
        {
            name: 'Product Name',
            selector: row => row.p_name,
            sortable: true,
            reorder:true
        },
        {
            name: 'Product Price',
            selector: row => row.p_price + ' $',
            sortable: true,
            reorder:true
        },
        {
            name: 'Product Category',
            selector: row => row.p_category,
            sortable: true,
            reorder:true
        },
        {
            name: 'Product Description',
            selector: row => row.p_description,
            sortable: false,
            maxWidth:'200px',
            reorder:true
        },
        {
            name:'Actions',
            cell:(row) => (
                <>
                    <Link to={'/edit-product/' + row.id }><button className="button-action secondary"><AiFillEdit/></button></Link>
                    <button className="button-action danger" onClick={() => deleteProduct(row.id)}><AiFillDelete/></button>
                </>)
            
        }
    ]
  return (
    <>
        <Link className="ml-auto" to="/add-product"><button className='btn btn-primary'>Add Product</button></Link>
        <DataTable columns={columns} data={products} striped pagination reorder />
    </>
  )
}

export default Product;

