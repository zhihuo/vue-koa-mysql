import fetch from '../utils/request';


// 登录
export const Login = (params) => fetch('/login', params, 'POST');

// 注册
export const Register = (params) => fetch('/register', params, 'POST');

// 登出
export const LoginOut = (params) => fetch('/loginout', params, 'GET');