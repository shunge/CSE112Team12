var bodyParser = require('body-parser');
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/phone', function (req, res) {
  res.sendFile(path.join(__dirname,'phone.html'));
})

app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/js', express.static(path.join(__dirname, '/js')));
app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/fonts', express.static(path.join(__dirname, '/fonts')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
