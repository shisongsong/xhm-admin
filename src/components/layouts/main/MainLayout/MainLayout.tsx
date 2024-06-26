import React, { useState } from 'react';

import { Layout } from 'antd';

import { Outlet } from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import MainHeader from '../MainHeader/MainHeader';
import MainSider from '../MainSider/MainSider';
import styles from './styles.module.scss';

const MainLayout: React.FC = () => {
    const [siderCollapsed, setSiderCollapsed] = useState(true);
    const toggleSider = () => setSiderCollapsed(!siderCollapsed);

    return (
        <Layout className={styles.main}>
            <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed}></MainSider>
            <Layout className={styles.content}>
                <MainHeader toggleSider={toggleSider} isSiderOpened={!siderCollapsed}></MainHeader>
                <MainContent>
                    <Outlet />
                </MainContent>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
