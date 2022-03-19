import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

import { Home } from '../pages/Home';
import { Register } from '../pages/Register';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<Navigate to={'/'} />} />
            </Routes>
        </BrowserRouter>
    );
};
