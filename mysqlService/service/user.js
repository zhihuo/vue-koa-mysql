

const allSqlAction = require("../config/DBcongfig")
async function checkUser(name, password) {
	 let sql = `select * from user where user_name = '${name}' and user_password= '${password}'`
	 return allSqlAction.allSqlAction(sql).then(res => {
		 if (res.length == 1 && res[0].user_name === name && res[0].user_password === password) {
		 return { msg: "登陆成功", status: 200 }
		 } else {
		 return { msg: "登录失败", status: 201 }
		 }
	 })
}
// 先查看是否存在用户，如果存在就提示有用户，如果没有就直接注册
async function findUser(name, password) {
 let sql = `select * from user where user_name = '${name}'`
 return allSqlAction.allSqlAction(sql).then(res => {
	 if (res.length == 0) {
	 return registerUser(name, password)
	 } else {
	 return { msg: "用户已存在", code: 202 }
	 }
 })
}
async function registerUser(name, password) {
 let sql = `insert into user (user_name,user_password) values ('${name}','${password}')`
 return allSqlAction.allSqlAction(sql).then(res => {
	 if (res.affectedRows == 1) {
	 return { msg: "注册成功", code: 200 }
	 } else {
	 return { msg: "注册失败", code: 200 }
	 }
 })
}
module.exports = {
 checkUser,
 findUser,
 registerUser
}