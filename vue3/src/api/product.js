
// 产品列表
export function Productslist(vm, params){
	return vm.$http.get('/products', params)
}

// 产品编辑
export function Editproducts(vm, params){
	return vm.$http.post('/editproducts', params)
}

// 产品新增
export function Addproducts(vm, params){
	return vm.$http.post('/addproducts', params)
}

// 产品删除
export function Delproducts(vm, params){
	return vm.$http.post('/delproducts', params)
}
