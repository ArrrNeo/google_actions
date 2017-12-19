'use strict';

process.env.DEBUG = 'actions-on-google:*';
//let Assistant = require('actions-on-google').ApiAiAssistant;
let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: 'application/json'}));

// we comunicate with arduino with post requests
var request = require('request');

app.get('/', function (req, res) {
	console.log('i got GET request');
	console.log('now sending GET request to raspberry pi');
	//request.get('http://192.168.0.20:8080/hello_there');
	res.send('i got your GET request\n');
});

app.post('/', function (req, res) {
	console.log('i got POST request');
	console.log('now sending GET request to raspberry pi');
	//request.get('http://192.168.0.20:8080/hello_there');
	res.send('i got your POST request\n');
});

if (module === require.main) {
  // Start the server
  let server = app.listen(process.env.PORT || 8080, function () {
    let port = server.address().port;
    console.log('App listening on port %s', port);
  });
}

module.exports = app;
