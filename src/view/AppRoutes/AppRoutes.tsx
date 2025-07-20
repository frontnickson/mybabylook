import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Authorization from '../pages/Authorization/Authorization';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/authorization' element={<Authorization />} />
        </Routes>
    );
};

export default AppRoutes;