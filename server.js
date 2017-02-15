const express = require('express');


let app = express();


let obj = {};

app.get('/api/whoami', function(req,res){
	let language = req.headers["accept-language"].split(",")[0];
	let agent =  req.headers['user-agent'].split(') ')[0].split(' (')[1]
	let ip =  req.headers['x-forwarded-for'] || 
	req.connection.remoteAddress || 
	req.socket.remoteAddress ||
	req.connection.socket.remoteAddress;

	obj.ipaddress = ip;
	obj.language = language;
	obj.software = agent;

	res.send(obj);

})

app.listen(3000);