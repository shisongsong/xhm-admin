import React, { useMemo } from 'react';

import { Layout } from 'antd';
const { Sider } = Layout;

import Logo from './Logo';
import Menu from './MenuBar';

import { useResponsive } from '@/hooks/useResponsive';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface Props {
    isCollapsed: boolean;
    setCollapsed: (isCollapsed: boolean) => void;
}

const MainSider: React.FC<Props> = ({ isCollapsed, setCollapsed, ...props }) => {
    const { isDesktop, mobileOnly, tabletOnly } = useResponsive();

    const isCollapsible = useMemo(() => mobileOnly && tabletOnly, [mobileOnly, tabletOnly]);

    const toggleSider = () => setCollapsed(!isCollapsed);

    return (
        <>
            <Sider
                className={classNames(styles.sider, styles.siderImportant)}
                trigger={null}
                collapsed={!isDesktop && isCollapsed}
                collapsedWidth={tabletOnly ? 80 : 0}
                collapsible={isCollapsible}
                width={260}
                {...props}
            >
                <Logo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />

                <div className={styles.content}>
                    <Menu setCollapsed={setCollapsed} />
                </div>
            </Sider>
            {mobileOnly && <div className={classNames(styles.overlay, !isCollapsed && styles.overlayShow)} onClick={toggleSider} />}
        </>
    );
};

export default MainSider;
