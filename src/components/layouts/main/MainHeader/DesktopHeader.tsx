import { Col, Input, Row } from 'antd';
import React from 'react';
// import { ProfileDropdown } from './components/ProfileDropdown/ProfileDropdown';
import SignInSignOutButton from './components/SignInSignOutButton/SignInSignOutButton';

export const DesktopHeader: React.FC = () => {
    return (
        <Row justify="space-between" align="middle">
            <Col lg={10} xxl={8}>
                <Input />
            </Col>
            {/* TODO */}
            <Col xl={4} xxl={3}>
                {/* <ProfileDropdown /> */}
                <SignInSignOutButton />
            </Col>
        </Row>
    );
};
