import fetch from '../utils/request';

// 用户信息列表
export const UsersList = (params) => fetch('/info', params, 'GET');
