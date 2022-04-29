import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AddProduct from './components/Products/AddProduct';
import EditProduct from './components/Products/EditProduct';
import Products from './components/Products/Products';

const App = () => {
  return (
    <div>
       <Header/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Products/>} />
              <Route path="/add-product" element={<AddProduct/>} />
              <Route path="/edit-product/:id" element={<EditProduct/>} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
