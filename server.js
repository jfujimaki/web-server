var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware');

//application level middleware
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('Hellp from about page! 3');
});

app.use(express.static(__dirname + "/public"));
app.listen(PORT, function(){
	console.log('server running on ' + PORT);
});