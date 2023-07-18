// Create web server
var express = require('express');
var app = express();
// Create path
var path = require('path');
// Create body-parser
var bodyParser = require('body-parser');
// Create urlencodedParser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// Create port
var port = 5000;
// Create static folder
app.use(express.static('public'));
// Create views folder
app.set('views', './views');
// Create view engine
app.set('view engine', 'ejs');
// Create get
app.get('/', function(req, res)
{
    res.render('index');
});
// Create post
app.post('/skills', urlencodedParser, function(req, res)
{
    res.render('skills',
    {
        query: req.body
    });
});
// Create post
app.post('/member', urlencodedParser, function(req, res)
{
    res.render('member',
    {
        query: req.body
    });
});
// Create post
app.post('/comments', urlencodedParser, function(req, res)
{
    res.render('comments',
    {
        query: req.body
    });
});
// Create get
app.get('/comments', function(req, res)
{
    res.render('comments');
});
// Create listen
app.listen(port, function()
{
    console.log('Listening on port: ', port);
});