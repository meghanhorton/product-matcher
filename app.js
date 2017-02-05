// // set variables for environment
var express = require('express'),
	exphbs  = require('express-handlebars'),
	sassMiddleware = require('node-sass-middleware'),
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

// Generates sass on load
app.use(sassMiddleware({
    /* Options */
    src: __dirname, // assets/css/
    dest: path.join(__dirname, '_build'), // _build/assets/css
    outputStyle: 'nested',
    prefix:  '/' 
}));

// Render
app.get('/', function (req, res, next) {
    res.render('index', {
    	title: 'Hey'
    });
});

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(3000);
console.log('Server running: http://localhost:3000');
