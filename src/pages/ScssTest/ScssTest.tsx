import { useResponsive } from '@/hooks/useResponsive';
import { Button } from 'antd';
import React, { useEffect } from 'react';

import styles from './styles.module.scss';

const ScssTest = () => {
    const { isMobile, isTablet, isDesktop, isBigScreen, mobileOnly, tabletOnly, desktopOnly } = useResponsive();

    useEffect(() => {
        console.table({ isMobile, isTablet, isDesktop, isBigScreen, mobileOnly, tabletOnly, desktopOnly });
    }, [isMobile, isTablet, isDesktop, isBigScreen, mobileOnly, tabletOnly, desktopOnly]);
    return (
        <div>
            <Button type="primary">Steven Zeng</Button>
            <span className={styles.plainText}>ScssTest</span>
        </div>
    );
};

export default ScssTest;
