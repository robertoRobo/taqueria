express = require('express');
app = express();

morgan = require('morgan');
bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

require('./routes/menuRoutes')(app);

app.set('port',process.env.PORT || 3000);


app.listen(app.get('port'),() => {
	console.log('server on port '+app.get('port'));
	}
);