import { HomeOutlined, TableOutlined } from '@ant-design/icons';
import React from 'react';
// import { ReactComponent as NftIcon } from '@app/assets/icons/nft-icon.svg';

export interface SidebarNavigationItem {
    title: string;
    key: string;
    url?: string;
    children?: SidebarNavigationItem[];
    icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
    {
        title: 'common.dashboard',
        key: 'dashboard',
        // TODO use path variable
        url: '/',
        icon: <HomeOutlined />,
    },
    {
        title: 'common.menu',
        key: 'menu',
        icon: <TableOutlined />,
        children: [
            {
                title: 'common.submenu1',
                key: 'submenu-1',
                url: '/menu/submenu-1',
            },
            {
                title: 'common.submenu2',
                key: 'submenu-2',
                url: '/menu/submenu-2',
            },
        ],
    },
];
