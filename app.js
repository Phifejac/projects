var request = require('request');
var app = require('express')();
var zipcodes = require('zipcodes');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('home');
});
app.get("/results", function(req, res){
	try {
		if (req.query.search == 80219){
			res.render('first');
		}
		else if (req.query.search == 80223){
			res.render('second');
		}
		else if (req.query.search == 80204){
			res.render('third');
		}
		else{
			res.render('home');
		}
	}
	catch(err) {
		res.redirect('/')
	}
});
app.listen(6009, function(){
	console.log("Server Started...");
});