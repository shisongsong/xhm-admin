import { UserModel } from '@/domain/UserModel';
const avatarImg = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar5.webp';

const testUser = {
    id: 1,
    firstName: 'Steven',
    lastName: 'Zeng',
    imgUrl: avatarImg,
    userName: '@steven',
    email: {
        name: 'szeng@melaleuca.com',
        verified: true,
    },
    phone: {
        number: '110',
        verified: true,
    },
    sex: 'male',
    birthday: '01/26/2022',
    lang: 'zh',
    country: 'CN',
    city: 'Shanghai',
    address1: '14 London Road',
    zipcode: 666666,
    website: 'google.com',
    socials: {
        twitter: '@fe',
        facebook: 'https://facebook.com/',
        linkedin: 'https://linkedin.com/',
    },
};

export const persistToken = (token: string): void => {
    localStorage.setItem('accessToken', token);
};

export const readToken = (): string => {
    return localStorage.getItem('accessToken') || 'bearerToken';
};

export const persistUser = (user: UserModel): void => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
    const userStr = localStorage.getItem('user');

    return userStr ? JSON.parse(userStr) : testUser;
};

export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');
