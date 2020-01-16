let router = require('koa-router')();
let userModel = require('../utils/mysql.js');

// 产品列表
router.get('/products', async (ctx, next)=> {
	// let {userName,password} = ctx.request.body
	await userModel.productList().then((res) => {
		if (!res.length) {
			ctx.body = {
	      status: 0,
	      msg: '没有数据！',
	      data: []
	    }
	    console.log('没有数据！')
		} else {
			ctx.body = {
        status: 200,
        msg: '产品数据请求成功！!',
        data: res
      }
    	console.log('产品数据请求成功！')
		}
	}).catch((err) => {
    ctx.body = {
      status: 0,
      msg: err,
      data: []
    }
  })
})

// 产品新增
router.post('/addproducts', async (ctx, next)=> {
  let {id,name, price, number} = ctx.request.body
  await userModel.addProduct([id, name, price, number]).then((res) => {
    ctx.body = {
      status: 200,
      msg: '新增成功!',
      data: res
    }
    console.log('新增成功！')
    
  }).catch((err) => {
    ctx.body = {
      status: 0,
      msg: err,
      data: []
    }
  })
})

// 产品修改
router.post('/editproducts', async (ctx, next)=> {
  let {id,name, price, number} = ctx.request.body
  await userModel.updateProduct([name, price, number, id]).then((res) => {
    ctx.body = {
      status: 200,
      msg: '修改成功!',
      data: res
    }
    console.log('修改成功！')
    
  }).catch((err) => {
    ctx.body = {
      status: 0,
      msg: err,
      data: []
    }
  })
})


// 产品删除
router.post('/delproducts', async (ctx, next)=> {
  let {id} = ctx.request.body
  await userModel.deleteProduct(id).then((res) => {
    ctx.body = {
      status: 200,
      msg: '删除成功!',
      data: res
    }
    console.log('删除成功！')
    
  }).catch((err) => {
    ctx.body = {
      status: 0,
      msg: err,
      data: []
    }
  })
})


module.exports = router





