import { useResponsive } from '@/hooks/useResponsive';
import { Layout } from 'antd';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
import styles from './styles.module.scss';

const { Header } = Layout;

interface Props {
    toggleSider: () => void;
    isSiderOpened: boolean;
}

const MainHeader: React.FC<Props> = ({ toggleSider, isSiderOpened }) => {
    const { isTablet } = useResponsive();
    return <Header className={styles.header}>{isTablet ? <DesktopHeader /> : <MobileHeader toggleSider={toggleSider} isSiderOpened={isSiderOpened} />}</Header>;
};

export default MainHeader;
