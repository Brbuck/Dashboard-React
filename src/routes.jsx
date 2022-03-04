import React from 'react';
import { Route, Routes } from 'react-router-dom'

import AddProducts from './pages/AddProducts'
import Customers from './pages/Customers'
import Home from './pages/home'
import NotFound from './pages/404'

function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/customers' element={<Customers/>} />
            <Route path='/add-products' element={<AddProducts />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}

export default Routers;