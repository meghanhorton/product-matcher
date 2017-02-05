// // set variables for environment
var express = require('express'),
	exphbs  = require('express-handlebars'),
	path = require('path'),
	app = express(),
	hbs = exphbs.create({
		defaultLayout: 'main',
		extname: '.html'
	});

// Sets up Handlebars engine with Express
// Searches for HTML files
app.engine('.html', hbs.engine);
app.set('view engine', '.html');
app.enable('view cache');

app.use('/', express.static(path.join(__dirname, 'public')));

// Render
app.get('/', function (req, res, next) {
    res.render('index', {
    	title: 'Hey'
    });
});

app.listen(3000);
console.log('Server running.');
