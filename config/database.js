const mongoose = require('mongoose');

mongoose.connect('mongodb://db:27017/totvs_development', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(result => {
	console.log('Connected');
}).catch(error => {
	console.log(error);
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'Failed connection with MongoDB'));

module.exports = mongoose; 