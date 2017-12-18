"use strict";
const functions = require('firebase-functions');
var ActionsSdkApp = require('actions-on-google').ActionsSdkApp;

exports.yourFunction = functions.https.onRequest((req, res) => {
	let name;
	let app = new ActionsSdkApp({request: req, response: res});

	function handleMainIntent(app) {
		app.tell('ending conversation!');
	}
	app.handleRequest(handleMainIntent);
    res.status(200);
    res.end();
});