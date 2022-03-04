import React from 'react';
import { Route, Routes } from 'react-router-dom'


function Routers() {
    return (
        <Routes>
            <Route path='/' element={<p>Hello World</p>} />
            <Route path="*" element={<p>Page not found 404 </p  >} />
        </Routes>
    );
}

export default Routers;