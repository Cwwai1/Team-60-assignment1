var express        = require('express');  
var app            = express();  
var httpServer = require("http").createServer(app);  
var five = require("johnny-five");  
var io=require('socket.io')(httpServer);

app.get('/', function(req,res){

		//send the index.html file for all requests
		res.sendFile(__dirname + '/index.html');
	});

httpServer.listen(3000, function(){

		console.log('listening on http://localhost:3000');
	});

//Connect to arduino
var board = new five.Board();
var led;
var motion;
board.on('ready', function(){
		console.log('Arduino connected');
		led = new five.Led(13);

		motion = new five.Motion(2);

	});


//socket connection handler
io.on('connection', function(socket){
		socket.on('led:on',  function(data){
			led.on();
			console.log('Led is on!');
		});

		socket.on('led:off', function(data){
			led.off();
			console.log('Led is off!');
		});

		socket.on('sensor:on', function(data){
			motion.on("motionstart", function() {
    			console.log("Motion start");
  			});

			motion.on("motionend", function() {
    			console.log("Motion end");
  			});
		});

		socket.on('sensor:off', function(data){
			console.log('NO MOTION')
		});

	});


		
