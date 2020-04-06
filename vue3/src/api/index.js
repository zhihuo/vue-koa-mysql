
import fetch from '../utils/request';
// map数据
// import Vue from 'vue'
// export default function getMap(vm, params){
// 	// 注意：如果不从页面传入this的话，就要使用全局的Vue.prototype来指定当前的方法
// 	// return Vue.prototype.$http.get('/map', params)
// 	return vm.$http.get('/map', params)

// }

export const GetMapData = params => fetch('/map', params, 'GET')