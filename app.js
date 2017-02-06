// set variables for environment
var express = require('express'),
	exphbs  = require('express-handlebars'),
	path = require('path'),
	request = require('request'),
	cheerio = require('cheerio'),
	bodyParser = require('body-parser'),
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

app.get('/form', function(request, response) {
  response.render('form',{
  	title: 'Form'
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// forms
app.use(bodyParser.urlencoded({ extended: true })); 



app.post('/form', function(req, res){
  url = req.body.url;

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title, price;
      var json = { title : "", price : "" };

      $('.price').filter(function(){
        var data = $(this);
        // title = data.children().first().text().trim();
        // release = data.children().last().children().last().text().trim();

        json.price = data;
      })
    }

    res.send(json.price);
  })
})

