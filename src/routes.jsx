import React from 'react';
import { Route, Routes } from 'react-router-dom'

import AddProducts from './pages/AddProducts'
import Customers from './pages/Customers'
import Home from './pages/home'
import NotFound from './pages/404'
import Products from './pages/Products';

function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/add-products' element={<AddProducts />} />
            <Route path='/customers' element={<Customers/>} />
            <Route path='/products' element={<Products />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}

export default Routers;