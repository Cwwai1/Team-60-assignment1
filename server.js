// server.js
var express        = require('express');  
var app            = express();  
var httpServer = require("http").createServer(app);  
var five = require("johnny-five");  
var io=require('socket.io')(httpServer);
 
var port = 3000; 
 
app.use(express.static(__dirname + '/public'));
 
app.get('/', function(req, res) {  
        res.sendFile(__dirname + '/public/index.html');
});
 
httpServer.listen(port);  
console.log('Server available at http://localhost:' + port);  

//Arduino board connection
 
var board = new five.Board(); 
var led; 
board.on("ready", function() {  
    console.log('Arduino connected');
    led = new five.Led(13);
    var motion = new five.Motion(2);

    motion.on("motionready", function(){
        console.long('Motion Ready')
    })

    motion.on("motionstart",function(){
        console.log('Motion Received');
    });

    motion.on("motionend", function(){
        console.log('Motion Ended');
    });

});
 
//Socket connection handler
io.on('connection', function (socket) {  
        console.log(socket.id);
 
        socket.on('led:on', function (data) {
           led.on();
           console.log('LED ON RECEIVED');
        });
 
        socket.on('led:off', function (data) {
            led.off();
            console.log('LED OFF RECEIVED');
            
        });
    });
 
console.log('Waiting for connection');