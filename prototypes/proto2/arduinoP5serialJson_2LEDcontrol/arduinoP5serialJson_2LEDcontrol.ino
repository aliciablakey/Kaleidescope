/*
 * Creation & Computation - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 *
 * Send 2 values to P5.js
 * values are formatted as JSON objects
 * This example reads 2 values from p5 and outputs to led brightness
 *
 *
 */
#include <ArduinoJson.h>
//*****BE SURE TO INSTALL VERSION 5.13.3 OF THE LIBRARY IT INSTALL V6BETA BY DEFAULT


int LEDpin1 = 11;
int LEDpin2 = 10;

int p5Input1;                                   //these variables hold the input values
int p5Input2;
int p5Input3;
int p5Input4;
void setup()
{
  Serial.begin(9600);                                     //turn on the serial port
  pinMode(LEDpin1,OUTPUT);                       //
  pinMode(LEDpin2,OUTPUT);
  Serial.write("setup complete");
}

void loop()

{
  DynamicJsonBuffer messageBuffer(200);                   //create the Buffer for the JSON object
  JsonObject& p5Read = messageBuffer.parse(Serial);      //create a JsonObject variable and attach it to incoming Serial messages

  p5Input1 = p5Read["led1"];
  p5Input2 = p5Read["led2"];
  p5Input3 = p5Read["led3"];
  p5Input4 = p5Read["led4"];
  analogWrite(LEDpin1,p5Input1);
  analogWrite(LEDpin2,p5Input2);
  Serial.write("_");

}



//void createJson()
//{
//  analogWrite(LEDpin1,p5Input1);
//  analogWrite(LEDpin2,p5Input2);
//
//}
//void analogRead() {
//void aWrite()
//{
//  analogWrite(LEDpin1,p5Input1);
//  analogWrite(LEDpin2,p5Input2);
//
//}
//void analogRead() {
//    p5Input1 = p5Read["led1"];
//    p5Input2 = p5Read["led2"];
//
