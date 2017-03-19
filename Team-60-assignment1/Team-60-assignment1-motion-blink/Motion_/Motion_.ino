int ledOutput = 13;                // A pin to connect LED
int motionInput = 2;               // An input pin for the motion sensor
int motionState = LOW;             // Assume no motion detected at first
int val = 0;                       // variable for reading the motion status
 
void setup() {
  pinMode(ledOutput, OUTPUT);      // declare LED as output
  pinMode(motionInput, INPUT);     // declare sensor as input
 
  Serial.begin(9600);
}
 
void loop(){
  val = digitalRead(motionInput);  // read motion input value
  if (val == HIGH) {            // check if the input is HIGH
    digitalWrite(ledOutput, HIGH);  // turn LED ON
    if (motionState == LOW) {
      Serial.println("Motion detected!");
      // print the output change, not state
      motionState = HIGH;
    }
  } else {
    digitalWrite(ledOutput, LOW); // turn LED OFF
    if (motionState == HIGH){
      Serial.println("Motion ended!");
      // print the output change, not state
      motionState = LOW;
    }
  }
}
