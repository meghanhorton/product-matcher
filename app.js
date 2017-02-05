// set variables for environment
var express = require('express'),
	exphbs  = require('express-handlebars'),
	path = require('path'),
	app = express(),
	hbs = exphbs.create({
		defaultLayout: 'main',
		extname: '.html'
	});

// Set port and define static files
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// // views is directory for all template files
app.set('views', __dirname + '/views');
app.engine('.html', hbs.engine);
app.set('view engine', '.html');

app.get('/', function(request, response) {
  response.render('home',{
  	title: 'My first app'
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

console.log(__dirname);
