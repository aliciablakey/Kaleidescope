#include <ArduinoJson.h>

#include <noise.h>
#include <bitswap.h>
#include <fastspi_types.h>
#include <pixelset.h>
#include <fastled_progmem.h>
#include <led_sysdefs.h>
#include <hsv2rgb.h>
#include <fastled_delay.h>
#include <colorpalettes.h>
#include <color.h>
#include <fastspi_ref.h>
#include <fastspi_bitbang.h>
#include <controller.h>
#include <fastled_config.h>
#include <colorutils.h>
#include <chipsets.h>
#include <pixeltypes.h>
#include <fastspi_dma.h>
#include <fastpin.h>
#include <fastspi_nop.h>
#include <platforms.h>
#include <lib8tion.h>
#include <cpp_compat.h>
#include <fastspi.h>
#include <FastLED.h>
#include <dmx.h>
#include <power_mgt.h>

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
#include <fastLED.h>

// FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);
#define DATA_PIN     3
#define NUM_LEDS    76
#define BRIGHTNESS  5
#define LED_TYPE    WS2812
#define COLOR_ORDER RBG
CRGB leds[NUM_LEDS];

#define UPDATES_PER_SECOND 1

int LEDpin1 = 3;
int LEDpin2 = 10;

//HOLD INPUT VALUES
int jVal1;
bool jVal2;
float jVal3; //try INT
bool jVal4;
int jVal5;




void setup()
{
  Serial.begin(9600);                                     //turn on the serial port
  pinMode(LEDpin1,OUTPUT);                       //
  pinMode(LEDpin2,OUTPUT);

    // sanity check delay - allows reprogramming if accidently blowing power w/leds
    delay(2000);
       FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);
//       loopWhiteLight();
}

void loop()

{
  DynamicJsonBuffer messageBuffer(400);                   //create the Buffer for the JSON object
  JsonObject& p5Read = messageBuffer.parse(Serial);      //create a JsonObject variable and attach it to incoming Serial messages

  jVal1 = p5Read["jVal1"];
  jVal2 = p5Read["jVal2"];
  jVal3 = p5Read["audio"];
  jVal4 = p5Read["led1"];




  // RedSlider
  // GrennSlider
  // BlueSlider
  // Possibly a random mode
  // Audio Reactive (controls Alpha!)


//
//if(jVal2){
//  //runs if audioReactive is on
//  Serial.write("Audio Reactive ON!");
//}
//
//if(jVal4){
//  //runs if RandomMode is on
//  Serial.write("RandomMode ON!");
//
//}
}
