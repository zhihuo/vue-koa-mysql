
// 链接数据库
const mysql = require('mysql');
const config = require('../config/mysql_config.js');

const mypool = mysql.createPool(config);

// 数据链接是否成功时的Promise的响应
const query = function(sql, val) {
	return new Promise((resolve, reject) => {
		mypool.getConnection((err, connection) => {
			if (err) {
        reject(err)
      } else {
        connection.query(sql, val, (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
          connection.release();
        })
      }
		})
	})
}


module.exports = query
