var express = require('express');
var app = express();

app.get('/', (req,res)=>{
	res.send('Hello World!');
});

var host = 'localhost';
var port = 3000;
var server = app.listen(port, ()=>{
	console.log('Example app listening at http://%s:%s', host, port);
});
