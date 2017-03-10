var express        = require('express');  
var app            = express();  
var httpServer = require("http").createServer(app);  
var five = require("johnny-five");  
var io=require('socket.io')(httpServer);

app.get('/', function(req,res){

		//send the index.html file for all requests
		res.sendFile(__dirname + '/index.html');
	});

httpServer.listen(3001, function(){

		console.log('listening on http://localhost:3001');
	});

//Connect to arduino
var board = new five.Board();
var led;
board.on('ready', function(){
		
		console.log('Arduino connected');
		led = new five.Led(13);
	});


//socket connection handler
io.on('connection', function(socket){
		socket.on('led:on',  function(data){
			led.on();
			console.log('Led is on!');
		});

		socket.on('led:off', function(data){
			led.off();
			console.log('Led is off!')
		});
	});
		
