

// map数据
export default function getMap(vm, params){
	return vm.$http.get('/map', params)
}
