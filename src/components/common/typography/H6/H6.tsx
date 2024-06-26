import React from 'react';
import { HProps } from '../interfaces';
import { Typography } from 'antd';
const { Title } = Typography;
import classnames from 'classnames';
import styles from './styles.module.scss';

export const H6: React.FC<HProps> = ({ className, children }) => (
    <Title className={classnames(className, styles.h6)} level={5}>
        {children}
    </Title>
);
