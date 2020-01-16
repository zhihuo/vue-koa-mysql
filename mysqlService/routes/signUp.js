let router = require('koa-router')();
let userModel = require('../utils/mysql.js');
const uuidV1 = require('uuid/v1');

// 注册
router.post('/register', async (ctx, next)=> {
	let {userName,password} = ctx.request.body
	await userModel.findUser(userName).then(async (res) => {
		if (res.length) {
			ctx.body = {
	      status: 0,
	      msg: '用户已注册',
	      data: []
	    }
	    console.log('用户已注册')
		} else {
			await userModel.insetUser([uuidV1(), userName, password]).then((res) => {
        console.log('注册成功')
        ctx.body = {
          status: 200,
          msg: '注册成功',
          data: []
        }
      }).catch((err) => {
        ctx.body = {
          status: 0,
          msg: err,
          data: []
        }
      })


		}
	}).catch((err) => {
    ctx.body = {
      status: 0,
      msg: err,
      data: []
    }
  })
})

module.exports = router