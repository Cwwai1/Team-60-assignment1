Team 60 -Assignment1
Name: Chuen Wern Wai (26077086), Kin Seng Chan (25656716)
There are the used Package that are required for this assignment:

Socket.Io : This is the Javascript library for us to use it and code.
Express: This is a web application framework for Node.js
Johnny Five: It is a platform for Javascript robotics and IOT

Our hardware consist of an Arduino board, LED lights, a motion sensor, usb cable to our machine and a few wires.
This assignment require us to use a Virtual Machine to run our hardwares.
The arduino board is needed to be connected with a LED light which are placed under the digital pin of GND and 13
whereas for the motion sensor, the output will be connected to digital pin 2 and GND from the motion sensor will be 
connected to the GND on the power and lastly will be the 5v.
This assignment consist of Motion folder for Task 1 and a server.js file and index.html for Task 2.
In order for task 2 to work properly, Node.js, Johnny five and socket.io are required to be installed

For Task 2 assignment 1, 
1. Open Arduino IDE
2. Go File > Examples > Firmata > StandardFirmataPlus
3. Connect Arduino board and click upload StandardFirmataPlus 
4. Open Terminal
5. Type instruction "node server.js" 
6. Terminal will show that Arduino board connected.
7. Go to browser, open http://localhost:3000/.

The website consist of controller of LED light and motion sensor and a few content which include, motion detected, number of long motion and numberof short motion. 
Lastly, the controller of LED light can be switch on and off as same as the motion sensor.
