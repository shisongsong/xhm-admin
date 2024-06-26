import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '@/components/layouts/main/MainLayout/ProLayout';

import Dashboard from '@/pages/Dashboard/Dashboard';
import ScssTest from '@/pages/ScssTest/ScssTest';
import SubMenu1 from '@/pages/SubMenu1/SubMenu1';
import SubMenu2 from '@/pages/SubMenu2/SubMenu2';
import Login from '@/pages/Account/Login';

const DASHBOARD_PATH = '/';

export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={DASHBOARD_PATH} element={<MainLayout />}>
                    <Route index element={<Dashboard />}></Route>
                    <Route path="menu">
                        <Route path="submenu-1" element={<SubMenu1 />}></Route>
                        <Route path="submenu-2" element={<SubMenu2 />}></Route>
                    </Route>
                    <Route path="scss" element={<ScssTest />}></Route>
                </Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
