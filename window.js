var Client = require('electron-rpc/client')
var client = new Client();

client.request('status', function(err, body) {
	document.getElementById("content").innerHTML = body;
});

client.on('status-update', function(err, body) {
	document.getElementById("content").innerHTML = body;
});