import React from 'react';

import logo from '@/assets/logo.png';
import { useResponsive } from '@/hooks/useResponsive';
import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import classnames from 'classnames';
import styles from './styles.module.scss';

interface Props {
    isSiderCollapsed: boolean;
    toggleSider: () => void;
}

const Logo: React.FC<Props> = ({ isSiderCollapsed, toggleSider }) => {
    const { tabletOnly } = useResponsive();

    return (
        <div className={styles.logo}>
            <Link className={styles.logoLink} to="/">
                <img src={logo} alt="Melaleuca" width={48} height={48} />
                <span className={styles.logoText}>Melaleuca</span>
            </Link>

            {tabletOnly && (
                <Button
                    className={classnames(styles.collapseButton, isSiderCollapsed && styles.collapsed)}
                    shape="circle"
                    size="small"
                    icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
                    onClick={toggleSider}
                />
            )}
        </div>
    );
};

export default Logo;
