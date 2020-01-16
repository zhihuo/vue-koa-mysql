const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// const index = require('./routes/index')
// const users = require('./routes/users')
// const signIn = require('./routes/signIn')
// const signUp = require('./routes/signUp')
// const info = require('./routes/info')
// const map = require('./routes/map')
// const product = require('./routes/product')
// const tlist = require('./routes/tlist')

const registerRouter  = require('./routes/index');

// error handler
onerror(app)

require('./utils/mysql.js');


// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(signIn.routes(), signIn.allowedMethods())  // 登陆
// app.use(signUp.routes(), signUp.allowedMethods())  // 注册
// app.use(info.routes(), info.allowedMethods())  // 个人信息
// app.use(map.routes(), map.allowedMethods())  // 地图信息
// app.use(product.routes(), product.allowedMethods())  // 产品信息
// app.use(tlist.routes(), tlist.allowedMethods())  // 表格信息

app.use(registerRouter());



// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
