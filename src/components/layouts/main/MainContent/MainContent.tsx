import { Layout } from 'antd';
import React from 'react';

import { WithChildrenProps } from '@/types/general';
import styles from './styles.module.scss';

const { Content } = Layout;
const MainContent: React.FC<WithChildrenProps> = ({ children }) => {
    return <Content className={styles.content}>{children}</Content>;
};

export default MainContent;
