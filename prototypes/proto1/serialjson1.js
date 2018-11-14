
var serial;       //variable to hold the serial port object
var ardSend = {}; //uses {} to define it as a JSON variable
var sendVal1, sendVal2, sendVal3, sendVal4;
var jVal1, jVal2, jVal3, jVal4;

var intervalID = window.setInterval(sendData, 2000);

var serialPortName = "/dev/cu.usbmodem1421";      //FOR PC it will be COMX on mac it will be something like "/dev/cu.usbmodemXXXX"
                                    //Look at P5 Serial to see the available ports
var sendRate = 9600;               //use this with setInterval to stablize the data sending to arduino
setInterval(sendData, 2000);
var lineWidth = 5;

function initSerial()
{

  //Setting up the serial port
  serial = new p5.SerialPort();     //create the serial port object
  serial.open(serialPortName);      //open the serialport. determined
  serial.on('open',ardCon);         //open the socket connection and execute the ardCon callback


}

function showData(audioIn)
{


sendVal1= RedSlider;
sendVal2= GreenSlider;
sendVal3= BlueSlider;
sendVal4= audioIn;


}

function sendData()
{
  ardSend.connected = true;
  ardSend.rVal = sendVal1;
  ardSend.gVal = sendVal2;
  ardSend.bVal = sendVal3;
  ardSend.audio = true;
  var mappedInput =  audioIn * 1000;
ardSend.inputLevel = mappedInput.toFixed(0);
  // var floatAudioIn = audioIn;
  // var floatedAudioIn = floatAudioIn.toFixed(5)
  // ardSend.audio = floatedAudioIn;
  // ardSend.audio = map(audioIn, 0.0001, .8, 10, 255);

  var sendString = JSON.stringify(ardSend);     //convert the json to a string
  console.log(sendString);
  serial.write(sendString);                     //send it over the serial port
  serial.write(',');                           //write a new line character
  serial.write("sendData");

}

function ardCon()
{
  console.log("connected to the arduino!! Listen UP");
}




// function programID() {

//   if(randomRandom) {

// 	} else {
// 	  noFill(randomMode);
// 	}


// }
