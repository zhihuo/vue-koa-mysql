const mysql = require('mysql')
const configDB = require('../config/mysql_config');
// const connection = mysql.createConnection(configDB);

/*建立连接池*/
let pool = mysql.createPool(configDB)
/*连接数据库*/
let allSqlAction = (sql, value) => {
	return new Promise((resolve, reject) => {
		pool.getConnection(function (err, connection) {
			if (err) {
				console.log(err)
				reject(err)
			}
			else {
				console.log("数据库连接成功")
				connection.query(sql, value, (err, row) => {
					if (err) reject(err)
					else{
						resolve(row)
					} 
					connection.release()
				})
			}
 		})
 })
}
module.exports = {
 allSqlAction
}