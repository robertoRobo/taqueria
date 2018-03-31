User = require('../models/menu');


module.exports = function(app){
	app.get('/',(req,res) =>{
		User.getMenu((err,data) =>{
			res.json(data);
		});
	});
}