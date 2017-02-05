// // set variables for environment
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

// Sets up Handlebars engine with Express
// Searches for HTML files
app.set('views', __dirname + '/views');
app.engine('.html', hbs.engine);
app.set('view engine', '.html');
app.enable('view cache');


// Render
app.get('/', function (req, res, next) {
    res.render('index', {
    	title: 'Hey'
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
