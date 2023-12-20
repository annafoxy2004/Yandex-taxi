import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/order/OrderPage';

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/orderPage' element={<OrderPage/>}/>
            </Routes>
        </div>
    );
};

export default MainRoutes;