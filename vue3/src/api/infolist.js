
// 用户信息列表
export default function Infolist(vm, params){
	return vm.$http.get('/usertables', params)
}
