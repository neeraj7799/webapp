var express = require('express');
var app = express();

app.get('/',function(req,res) {
	// res.send("Hello World");
	res.sendFile(__dirname+'/frontend/html/index.html');
})

app.get('/resume',function(req,res) {
	// res.send("Hello World");
	res.sendFile(__dirname+'/frontend/html/index.html');
})

var port=process.env.PORT || 30000;

app.listen(port, function() {

console.log("Site is running on https://localhost:"+port);
});
