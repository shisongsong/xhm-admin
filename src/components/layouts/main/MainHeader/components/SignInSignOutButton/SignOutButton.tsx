import { useEffect, useState } from 'react';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
    {
        label: 'Sign out using Popup',
        key: 'popup',
    },
    {
        label: 'Sign out using Redirect',
        key: 'redirect',
    },
];

export const SignOutButton = () => {

    const handleLogout: MenuProps['onClick'] = ({ key }) => {
        if (key === 'popup') {
            console.log('logout')
        } else if (key === 'redirect') {
            console.log('logout')
        }
    };

    const account = null;
    const [name, setName] = useState('');

    useEffect(() => {
        if (account) {
            setName('111');
        } else {
            setName('');
        }
    }, [account]);

    return (
        <div>
            <Dropdown menu={{ items, onClick: handleLogout }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        sign out
                        {name ? `(Welcome, ${name})` : ''}
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
};
