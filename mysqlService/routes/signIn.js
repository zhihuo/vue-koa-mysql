let router = require('koa-router')();
let userModel = require('../utils/mysql.js');

// 登陆
router.post('/login', async (ctx, next)=> {
	let {userName,password} = ctx.request.body
	await userModel.findUser(userName).then((res) => {
		if (!res.length) {
			ctx.body = {
	      status: 0,
	      msg: '用户未注册',
	      data: []
	    }
	    console.log('用户未注册')
		} else {
			if (res[0].passWord === password) {
				ctx.body = {
          status: 200,
          msg: '用户登录成功!',
          data: []
        }
      	console.log('用户登录成功')
			} else {
				ctx.body = {
          status: 0,
          msg: '用户名或者密码错误!',
          data: []
        }
        console.log('用户名或者密码错误')
			}
		}
	}).catch((err) => {
    ctx.body = {
      status: 0,
      msg: err,
      data: []
    }
  })
})

// 退出
router.get('/loginout', async (ctx, next)=> {
	ctx.body = {
    status: 200,
    msg: '用户登录成功!',
    data: []
  }
})

module.exports = router