import axios from './http';

// 获取 某个model 的 reviews
export const login = (data: any): Promise<any> => {
    return axios.post('/admin/login', data);
};