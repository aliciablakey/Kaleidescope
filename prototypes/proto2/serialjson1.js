//Creation&Computation
//sends the X Y value of the cursor to arduino
//the coordinates are mapped as led brightness values
//led1 is mapped to the x coordinate
//led2 is mapped to the y coordinate
//requires p5send_arduino.ino to be running on your arduino

var serial;       //variable to hold the serial port object
var ardSend = {}; //uses {} to define it as a JSON variable
var sendVal1;     //variables to hold the values to send to arduino
var sendVal2;
var jVal1;
var jVal2;
var jVal3;
var jVal4;
var jVal5;
var intervalID = window.setInterval(sendData, 500);

var serialPortName = "COM3";      //FOR PC it will be COMX on mac it will be something like "/dev/cu.usbmodemXXXX"
                                    //Look at P5 Serial to see the available ports
var sendRate = 9600;               //use this with setInterval to stablize the data sending to arduino
var fontSize;
var lineWidth = 2;

function initSerial()
{

  //Setting up the serial port
  serial = new p5.SerialPort();     //create the serial port object
  serial.open(serialPortName);      //open the serialport. determined
  serial.on('open',ardCon);         //open the socket connection and execute the ardCon callback

  //setting the send rate
  setInterval(sendData,200);         //built in javascript function that executes a funtion every XXXX milliseconds
                                    //in this case we use it to execute the sendData function we do this to stabilize the send function

}

function showData()
{
fontSize = height/35;//adjust the size of the font based on the height of the window

////*grabbing/mapping the values to be sent to arduino
sendVal1= slider1;      //read the x mouse value and convert it to an LED value
sendVal2= slider2;     //read the y mouse value and convert it to an LED value
jVal1;
jVal2;
jVal3;
jVal4;
jVal5;

text("led1  :  "+sendVal1,mouseX+50,mouseY-10);
text("led2  :  "+sendVal2,mouseX+50,mouseY-55);
setInterval(1000);

}

function sendData()
{

  ardSend.jVal1 = sendVal1;                      //add the value to the led1 parameter on the json object
  ardSend.led2 = sendVal2;                      //add the value to the led2 parameter on the json object

  var sendString = JSON.stringify(ardSend);     //convert the json to a string
  console.log(sendString);
  setInterval(1000);
  serial.write(sendString);                     //send it over the serial port
  serial.write(',');                           //write a new line character
  serial.write("sendData");

}
setInterval(sendData, 1000);
setInterval(showData, 1000);

function ardCon()
{
  console.log("connected to the arduino!! Listen UP");
}




function programID() {

  if(randomRandom) {

	} else {
	  noFill(randomMode);
	}


}
