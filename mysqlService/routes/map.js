let router = require('koa-router')();
let userModel = require('../utils/mysql.js');

// 地图数据
router.get('/map', async (ctx, next)=> {
	await userModel.mapList().then((res) => {
		if (!res.length) {
			ctx.body = {
	      status: 0,
	      msg: '没有数据',
	      data: []
	    }
	    console.log('没有数据')
		} else {
				ctx.body = {
          status: 200,
          msg: '操作成功!',
          data: res
        }
      	console.log('操作成功!')
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