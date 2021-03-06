import React from 'react';
import { Route, Routes } from 'react-router-dom'

import AddProducts from './pages/AddProducts'
import Customers from './pages/Customers'
import DeleteProduct from './pages/DeleteProducts';
import EditProduct from './pages/EditProduct';
import Home from './pages/home'
import NotFound from './pages/404'
import Products from './pages/Products';
import Messages from './pages/Messages'
import Login from './Components/Login'

function Routers() {
    return (
        <Routes>
             <Route path='/' element={<Login/>} />
            <Route path='/dashboard' element={<Home/>} />
            <Route path='/add-products' element={<AddProducts />} />
            <Route path='/customers' element={<Customers/>} />
            <Route path='/delete-product/:id' element={<DeleteProduct />} />
            <Route path='/edit-product/:id' element={<EditProduct />} />
            <Route path='/products' element={<Products />} />
            <Route path='/messages' element={<Messages />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}

export default Routers;