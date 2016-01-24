var express = require('express');
var app = express();
var PORT = 3000;
var middleware = {
	requireAuthentication: function(req, res, next){
		console.log("this route is private");
		next();
	},
	logger: function(req, res, next){
		console.log('Request: ' + (new Date().toString()) + req.method + ' ' + req.originalUrl);
		next();
	}
}

//application level middleware
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('<h1>this is my about page! Cool</h1>');
});

app.use(express.static(__dirname + "/public"));
app.listen(PORT, function(){
	console.log('server running on ' + PORT);
});