"use strict";
const functions = require('firebase-functions');
var ActionsSdkApp = require('actions-on-google').ActionsSdkApp;
// to comunicate with raspberry pi
var request = require('request');

exports.yourFunction = functions.https.onRequest((req, res) => {
	request('http://67.180.85.58:8080/get_room_temp', function (error, response, body) {
		let app = new ActionsSdkApp({request: this.my_req, response: this.my_res});
		//console.log('error:', error);
		//console.log('statusCode:', response && response.statusCode);
		//console.log('body:', body);
		app.tell(body);
		this.my_res.status(200);
		this.my_res.end();
	}.bind({my_req: req, my_res: res}));
});