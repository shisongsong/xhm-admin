import React from 'react';
import { useTranslation } from 'react-i18next';

import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { SidebarNavigationItem, sidebarNavigation } from './menuBar.navigation';

import styles from './styles.module.scss';

interface Props {
    setCollapsed: (isCollapsed: boolean) => void;
}

const sidebarNavFlat = sidebarNavigation.reduce(
    (result: SidebarNavigationItem[], current) => result.concat(current.children && current.children.length > 0 ? current.children : current),
    [],
);

const MenuBar: React.FC<Props> = ({ setCollapsed }) => {
    const { t } = useTranslation();
    const location = useLocation();

    const currentMenuItem = sidebarNavFlat.find(({ url }) => url === location.pathname);
    const defaultSelectedKeys = currentMenuItem ? [currentMenuItem.key] : [];

    const openedSubmenu = sidebarNavigation.find(({ children }) => children?.some(({ url }) => url === location.pathname));
    const defaultOpenKeys = openedSubmenu ? [openedSubmenu.key] : [];

    return (
        <Menu
            className={styles.menuBar}
            mode="inline"
            defaultSelectedKeys={defaultSelectedKeys}
            defaultOpenKeys={defaultOpenKeys}
            onClick={() => setCollapsed(true)}
            items={sidebarNavigation.map((nav) => {
                const isSubMenu = nav.children?.length;

                return {
                    key: nav.key,
                    title: t(nav.title),
                    label: isSubMenu ? t(nav.title) : <Link to={nav.url || ''}>{t(nav.title)}</Link>,
                    icon: nav.icon,
                    children:
                        isSubMenu &&
                        nav.children &&
                        nav.children.map((childNav) => ({
                            key: childNav.key,
                            label: <Link to={childNav.url || ''}>{t(childNav.title)}</Link>,
                            title: t(childNav.title),
                        })),
                };
            })}
        />
    );
};

export default MenuBar;
