import { Col, Row } from 'antd';
import React from 'react';
import { ProfileDropdown } from './components/ProfileDropdown/ProfileDropdown';

import BurgerIcon from '@/components/common/BurgerIcon/BurgerIcon';
import classNames from 'classnames';
import styles from './styles.module.scss';
interface Props {
    toggleSider: () => void;
    isSiderOpened: boolean;
}

export const MobileHeader: React.FC<Props> = ({ toggleSider, isSiderOpened }) => {
    return (
        <Row className={styles.mobile} justify="space-between" align="middle">
            <Col>
                <ProfileDropdown />
            </Col>
            <Col>{!isSiderOpened && 8888}</Col>
            <Col className={styles.burger}>
                <BurgerIcon onClick={toggleSider} isCross={isSiderOpened} className={classNames(styles.burgerIcon, isSiderOpened && styles.cross)} />
            </Col>
        </Row>
    );
};
