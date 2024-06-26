import { Divider, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const ProfileOverlay: React.FC = ({ ...props }) => {
    const { t } = useTranslation();

    return (
        <div {...props}>
            <Typography.Text className={styles.text}>
                <Link to="/profile">{t('profile.title')}</Link>
            </Typography.Text>
            <Divider className={styles.divider} />
            <Typography.Text className={styles.text}>
                <Link to="/logout">{t('header.logout')}</Link>
            </Typography.Text>
        </div>
    );
};
