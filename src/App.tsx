import React from 'react';

import { AppRouter } from '@/router/AppRouter';

import { Provider } from 'react-redux';
import { store } from '@/store/store';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import 'typeface-lato';
import 'typeface-montserrat';

import { BREAKPOINTS } from '@/constants/breakpoints';
import './locales/i18n';
import './styles/global.scss';

console.log(
    `%c${process.env.BUILD_INFO.name}%cv${process.env.BUILD_INFO.version}`,
    'background: #35495e; color: #fff; padding: 2px 4px; border-radius: 3px 0 0 3px;',
    'background: #19be6b; color: #fff; padding: 2px 4px; border-radius: 0 3px 3px 0;',
);
console.log(
    `%c${process.env.GIT_AUTHOR_DATE}%cv${process.env.GIT_VERSION}`,
    'background: #35495e; color: #fff; padding: 2px 4px; border-radius: 3px 0 0 3px;',
    'background: #19be6b; color: #fff; padding: 2px 4px; border-radius: 0 3px 3px 0;',
);

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ConfigProvider
                locale={zhCN}
                theme={{
                    token: {
                        colorPrimary: '#ff0000',

                        screenXS: BREAKPOINTS.xs,
                        screenXSMin: BREAKPOINTS.xs,
                        screenXSMax: BREAKPOINTS.sm - 1,
                        screenSM: BREAKPOINTS.sm,
                        screenSMMin: BREAKPOINTS.sm,
                        screenSMMax: BREAKPOINTS.md - 1,
                        screenMD: BREAKPOINTS.md,
                        screenMDMin: BREAKPOINTS.md,
                        screenMDMax: BREAKPOINTS.lg - 1,
                        screenLG: BREAKPOINTS.lg,
                        screenLGMin: BREAKPOINTS.lg,
                        screenLGMax: BREAKPOINTS.xl - 1,
                        screenXL: BREAKPOINTS.xl,
                        screenXLMin: BREAKPOINTS.xl,
                        screenXLMax: BREAKPOINTS.xxl - 1,
                        screenXXL: BREAKPOINTS.xxl,
                        screenXXLMin: BREAKPOINTS.xxl,

                        fontFamily: `'Montserrat', sans-serif`, // TODO if this is right?
                        // colorPrimaryBg: '', // Might not be the best way to disable the PrimaryBG colour, but it works
                    },
                }}
            >
                <AppRouter />
            </ConfigProvider>
        </Provider>
    );
};

export default App;
