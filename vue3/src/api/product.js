
import fetch from '../utils/request';

// 产品列表
// export function Productslist(vm, params){
// 	return vm.$http.get('/products', params)
// }
export const Productslist = params => fetch('/products', params, 'GET');

// 产品编辑
// export function Editproducts(vm, params){
// 	return vm.$http.post('/editproducts', params)
// }
export const Editproducts = params => fetch('/editproducts', params, 'post');
// 产品新增
// export function Addproducts(vm, params){
// 	return vm.$http.post('/addproducts', params)
// }
export const Addproducts = params => fetch('/addproducts', params, 'post');

// 产品删除
// export function Delproducts(vm, params){
// 	return vm.$http.post('/delproducts', params)
// }
export const Delproducts = params => fetch('/delproducts', params, 'post');