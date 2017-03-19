Team 60 -Assignment1
Name: Chuen Wern Wai (26077086), Kin Seng Chan (25656716).

This assignment consist of Motion folder for Task 1.
server.js file and index.html for Task 2.

Packages are used for Task 2 Assignment 1, which are:
	Socket.Io: 		This is the Javascript library for us to use it and code.
	Express: 		This is a web application framework for Node.js
	Johnny Five: 	It is a platform for Javascript robotics and IOT
	HTML:			The interface for the client side so that user are able to perform action and send it to node.js
	Node.js:		A file that consists all actions of the Aruino board and send information to HTML file so that user are able to see which action has been performed.


Hardware that are used for this assignment:
	Arduino board.
	LED light.
	Motion sensor.
	an USB cable to connect Arduino board to the machine(desktop / laptop).
	Few wires to connect the motion sensor and LED light to the Arduino board.


To setup the Arduino board for Task 2:
	To connect the LED:
		Plug in the positive side of the LED to the Port 13.
		Plug in the negative side of the LED to the GND.

	To connect the motion sensor:
		Plug in Out to Port 2.
		Plug in VCC to 5V.
		Plug in GND of PIR to GND of Arduino board.

	Lastly, plug in Arduino board to machine (desktop / laptop).


In order for task 2 to work properly, Node.js, Johnny five and socket.io are required to be installed. Open the LXTerminal and write the lines given below:
	$ npm install express
	$ npm install johnny-five
	$ npm install socket.io


To run Task2:
	1. Open Arduino IDE
	2. Go File > Examples > Firmata > StandardFirmataPlus
	3. Connect Arduino board and click upload StandardFirmataPlus 
	4. Open Terminal
	5. Type instruction "node server.js" 
	6. Terminal will show that Arduino board connected.
	7. Go to browser, open http://localhost:3000/.

Last but not least, user are able to perform actions from the client side which are:
	Switching the LED on and off.
	Switching the motion sensor on and off.
	Display total number of motion detected from the motion sensor.
	Display total number of long and short motion detected from the motion sensor.

