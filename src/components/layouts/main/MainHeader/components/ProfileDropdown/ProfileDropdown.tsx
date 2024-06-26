import { Popover } from '@/components/common/Popover/Popover';
import { H6 } from '@/components/common/typography/H6/H6';
import { useAppSelector } from '@/hooks/reduxHooks';
import { useResponsive } from '@/hooks/useResponsive';
import { Avatar, Col, Row } from 'antd';
import React from 'react';
import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';

import styles from './styles.module.scss';

export const ProfileDropdown: React.FC = () => {
    const { isTablet } = useResponsive();

    const user = useAppSelector((state) => state.user.user);

    return user ? (
        <Popover content={<ProfileOverlay />} trigger="click">
            <Row className={styles.profile} gutter={[10, 10]} align="middle">
                <Col>
                    <Avatar src={user.imgUrl} alt="User" shape="circle" size={40} />
                </Col>
                {isTablet && (
                    <Col>
                        <H6>{`${user.firstName} ${user.lastName[0]}`}</H6>
                    </Col>
                )}
            </Row>
        </Popover>
    ) : null;
};
