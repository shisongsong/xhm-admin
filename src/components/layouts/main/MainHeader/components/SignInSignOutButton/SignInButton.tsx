import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
    {
        label: 'Sign in using Popup',
        key: 'popup',
    },
    {
        label: 'Sign in using Redirect',
        key: 'redirect',
    },
];

export const SignInButton = () => {

    const handleLogin: MenuProps['onClick'] = ({ key }) => {
        if (key === 'popup') {
            console.log("login")
        } else if (key === 'redirect') {
            console.log("login")
        }
    };

    return (
        <div>
            <Dropdown menu={{ items, onClick: handleLogin }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        sign in
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
};
