
// 用户信息列表
// export default function Infolist(vm, params){
// 	return vm.$http.get('/usertables', params)
// }

import fetch from '../utils/request';

export const Infolist = (params) => fetch('/usertables', params, 'GET');
