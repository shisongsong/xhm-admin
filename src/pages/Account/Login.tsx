import { Button, message, Flex, Image, Watermark } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginOutlined } from '@ant-design/icons';
import LoginBg from '@/assets/automation-process.gif';
import styles from './styles.module.scss';
import { ProForm, ProFormDependency, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { login } from '@/api/auth';
import { persistToken } from '@/utils/localStorage';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const [messageApi, contextHolder] = message.useMessage();
    const key = 'loginMessage';

    const handleLogin = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: '正在登录',
            duration: 1000,
        });
    };

    return (
        <>
            {contextHolder}
            <Watermark height={30} width={200} content="小红猫来咯~🐱" gap={window.innerWidth > 468 ? [100, 100] : [50, 50]}>
                <Flex align="center" justify="center" className={styles.container}>
                    <Flex
                        vertical
                        align="center"
                        gap="large"
                        style={{ width: '100%', height: '100%', maxWidth: '468px', padding: '0 20px', paddingTop: '50px' }}
                    >
                        <Image width={'100%'} src={LoginBg} style={{ borderRadius: '5%' }} preview={false} />
                        <div className={styles.typewriter}>
                            <div className={styles.typing}>小红猫🐱：喵·喵·喵.小红猫🐱：喵 喵 喵.</div>
                        </div>
                        <ProForm
                            onFinish={async (values) => {
                                console.log(values);
                                var res = await login(values);
                                if (res && res.access_token) {
                                    persistToken(res.access_token)
                                    message.success('登录成功');
                                    navigate("/", { replace: true })
                                }
                            }}
                            initialValues={{
                                useMode: 'chapter',
                            }}
                            submitter={{
                                // 配置按钮文本
                                searchConfig: {
                                    resetText: '重置',
                                    submitText: '提交',
                                },
                                // 配置按钮的属性
                                resetButtonProps: {
                                    style: {
                                        // 隐藏重置按钮
                                        display: 'none',
                                    },
                                },
                                submitButtonProps: {},

                                // 完全自定义整个区域
                                render: (props, doms) => {
                                    console.log(props);
                                    return [
                                        <Flex vertical justify="center" align="center">
                                            <Button type="primary" key="submit" size="large" icon={<LoginOutlined />} onClick={() => props.form?.submit?.()}>
                                                登 录
                                            </Button>
                                        </Flex>
                                    ];
                                },
                            }}
                        >
                            <ProFormText
                                width="md"
                                name="phone"
                                placeholder="手机号"
                            />
                            <ProFormText.Password
                                width="md"
                                name="password"
                                placeholder="请输入密码"
                            />
                        </ProForm>

                    </Flex>
                </Flex>
            </Watermark>
        </>
    );
};

export default Login;
