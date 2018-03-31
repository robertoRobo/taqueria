mysql = require('mysql');

connection = mysql.createConnection({
	host:'192.168.56.101',
	user:'root',
	password: 'roberto123',
	database: 'taqueria'
});
let userModel = {};

userModel.getMenu = (callback) =>{
	if (connection) {
		connection.query("Select * from menu",
		(err,rows)=>{
			if (err) {
				throw err;
			}else{
				callback(null,rows);
			}
		});
		}
	}
module.exports = userModel;