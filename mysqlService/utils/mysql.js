
//============表的操作=================

// query 数据链接的方法
const query = require('./query')

// 创建表
const createTable = (sql)=> {
	query(sql, [])
}

// 创建实例表
const usersTable = `CREATE TABLE IF NOT EXISTS users (
	id VARCHAR(36) NOT NULL,
	name VARCHAR(16) NOT NULL,
	passWord VARCHAR(16) NOT NULL,
	PRIMARY KEY (id)
)`;

const infoTable = `CREATE TABLE IF NOT EXISTS info (
	id VARCHAR(36) NOT NULL,
	name VARCHAR(16) NOT NULL,
	PRIMARY KEY (id)
)`;

const productTable = `CREATE TABLE IF NOT EXISTS product (
	id VARCHAR(36) NOT NULL,
	name VARCHAR(16) NOT NULL,
	price VARCHAR(16) NOT NULL,
	number VARCHAR(16) NOT NULL,
	PRIMARY KEY (id)
)`;

const mapTable = `CREATE TABLE IF NOT EXISTS map (
	name VARCHAR(16) NOT NULL,
	value VARCHAR(16) NOT NULL
)`;

const tlistTable = `CREATE TABLE IF NOT EXISTS tlist (
	date VARCHAR(16) NOT NULL,
	name VARCHAR(16) NOT NULL,
	address TEXT(0) NOT NULL
)`;

// 建表
createTable(usersTable) // 用户表
createTable(infoTable) // 个人信息
createTable(productTable) // 产品列表
createTable(mapTable) // 地图
createTable(tlistTable) // 列表

// 插入users表数据
const insetUser = (val) => {
	let _sql = `INSERT INTO users (id, name, passWord) VALUES(?,?,?)`
	return query(_sql, val)
}

// 修改产品列表数据
const updateProduct = (val) => {
	let _sql = `UPDATE product SET name = ?, price = ?,number = ? WHERE id=?`
	return query(_sql, val)
}

// 删除产品列表数据
const deleteProduct = (val) => {
	let _sql = `DELETE FROM product WHERE id=?`
	return query(_sql, val)
}

// 新增产品数据
const addProduct = (val) => {
	let _sql = `INSERT INTO product (id, name, price, number) VALUES(?,?,?,?)`
	return query(_sql, val)
}

const findUser = (val) => { // 查找所有users
  let _sql = `SELECT * FROM users WHERE name = '${val}'`
  return query(_sql)
}

// info 列表
const infoList = () => {
  let _sql = `SELECT * FROM info`
  return query(_sql)
}

// map 列表
const mapList = () => { 
  let _sql = `SELECT * FROM map`
  return query(_sql)
}

// product 列表
const productList = () => {
	let _sql = `SELECT * FROM product`
  return query(_sql)
}

// 表格列表
const tList = () => {
	let _sql = `SELECT * FROM tlist`
  return query(_sql)
}

module.exports = {
	insetUser,
	findUser,
	infoList,
	mapList,
	productList,
	addProduct,
	updateProduct,
	deleteProduct,
	tList
}





















