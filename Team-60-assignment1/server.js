var express        = require('express');  
var app            = express();  
var httpServer = require("http").createServer(app);  
var five = require("johnny-five");  
var io = require('socket.io')(httpServer);

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
board.on('ready', function(){//to connect the board
		console.log('Arduino connected');
		led = new five.Led(13);//declare a variable to connect to led pin

		motion = new five.Motion(2); //declare a variable to connect to motion pin

	});

var time1;
var time2;
var diff;
var total = 0;
var longmotion = 0;
var shortmotion = 0;
var bool;
//socket connection handler
io.on('connection', function(socket){
		socket.on('led:on',  function(data){//turn on led
			led.on();
			console.log('Led is on!');
		});

		socket.on('led:off', function(data){//turn off led
			led.off();
			console.log('Led is off!');
		});

		socket.on('motion:bool', function(data){
			bool = true;
		});

		socket.on('sensor:on', function(data){//to turn the motion sensor on
			bool = true;
			motion.on("motionstart", function() {
				if (bool === true){
					console.log("Motion start");
					time1 = new Date().getTime();//to get the time taken of the motion
					total++;
				}
			});

			motion.on("motionend", function() {
				if (bool === true){
					console.log("Motion end");
					time2 = new Date().getTime();
					diff = time2 - time1;
					console.log(diff);
					console.log(total);
					socket.emit('total:motion', {motionno: total});
					if (diff > 5000){
						longmotion++;
					} else{
						shortmotion++;
					};
					socket.emit('long:motion', {motionlong: longmotion});
					socket.emit('short:motion', {motionshort: shortmotion});
				}
			});
		});

		socket.on('sensor:off', function(data){//to turn off the motion sensor
			bool = false;
			console.log('Motion Off')
		});

	});


		
