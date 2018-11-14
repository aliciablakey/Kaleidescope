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


#include <ArduinoJson.h>
#include <fastLED.h>

#define DATA_PIN     3
#define NUM_LEDS    76

#define LED_TYPE    WS2812
#define COLOR_ORDER RBG
CRGB leds[NUM_LEDS];

#define UPDATES_PER_SECOND 1
int BRIGHTNESS = 1;


int LEDpin1 = 3;
int LEDpin2 = 10;

//HOLD INPUT VALUES
bool jVal1;
bool jVal2;
float jVal3; //try INT
bool jVal4;
int jVal5;
bool jValConnected;
int rVal;
int gVal;
int bVal;

// ¯\_(ツ)_/¯¯\_(ツ)_/¯¯\_(ツ)_/¯¯\_(ツ)_/¯¯\_(ツ)_/¯¯\_(ツ)_/¯¯\_(ツ)_/¯
void setup()
{
  Serial.begin(9600);                                     //turn on the serial port
  pinMode(LEDpin1,OUTPUT);                       //
  pinMode(LEDpin2,OUTPUT);

    // sanity check delay - allows reprogramming if accidently blowing power w/leds
    delay(2000);
       FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);

      // IF controller turns on, idles at blue
      leds[0,1,2,3,4,5,6,7,8,9,10,11,12] = CRGB::Blue; FastLED.show(); delay(4000);
      // IF json name:value ("connected":"true"), THEN run load complete function
       if(jValConnected = true){
        loadComplete();
       }
}

void loop()

{
  DynamicJsonBuffer messageBuffer(400);                   //create the Buffer for the JSON object
  JsonObject& p5Read = messageBuffer.parse(Serial);      //create a JsonObject variable and attach it to incoming Serial messages

  jValConnected = p5Read["connected"];
//  rVal = p5read["rVal"];
//  gVal = p5Read["gVal"];
//  bVal = p5read["bVal"];
  jVal1 = p5Read["pMode"]; // BOOL for in pMode is on
  jVal2 = p5Read["pVal"];
  jVal3 = p5Read["audio"]; // BOOL for if AudioMode is on
  jVal4 = p5Read["inputLevel"];

//IF both modes are turned off, be idle.
//  if ((jVal1 == false) && (jVal3 == false)){
//    leds[0,1,2,3,4,5,6,7,8,9,10,11,12] = CRGB::Blue; FastLED.show(); delay(4000);
//    leds[0,1,2,3,4,5,6,7,8,9,10,11,12].fadeLightBy( 64 ); delay(1000);
//  }

//  if (jVal1 == true) {
//    rValToLight();
//  }
//
//  if (jVal3 == true){
//    voiceToLight();
//  }

voiceToLight();


}






//  if(jVal3 = true) {
    // Reduce color to 75% (192/256ths) of its previous value
  // using "video" scaling, meaning: never fading to full black

//      leds[0,1,2,3,4,5,6,7,8,9,10,11,12] = CRGB::White; FastLED.show(); delay(100);
//      leds[0,1,2,3,4,5,6,7,8,9,10,11,12] %= jVal4;
//      leds[0,1,2,3,4,5,6,7,8,9,10,11,12].addToRGB(jVal4);
//      led[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
//  }

//  if(jVal3 = true) {
    // Reduce color to 75% (192/256ths) of its previous value
  // using "video" scaling, meaning: never fading to full black

//      leds[0,1,2,3,4,5,6,7,8,9,10,11,12] = CRGB::White; FastLED.show(); delay(100);
//      leds[0,1,2,3,4,5,6,7,8,9,10,11,12] %= jVal4;
//      leds[0,1,2,3,4,5,6,7,8,9,10,11,12].addToRGB(jVal4);
//      led[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
//  }



//  loopWhiteLight();

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


//void loopWhiteLight() {
//   // Move a single white led
//   for(int whiteLed = 0; whiteLed < NUM_LEDS; whiteLed = whiteLed + 1) {
//
//      leds[whiteLed] = CRGB::White;
//
//      // Show the leds (only one of which is set to white, from above)
//      FastLED.show();
//
//      // Wait a little bit
//      delay(100);
//
//      // Turn our  led back to black for the next loop around
//      leds[whiteLed] = CRGB::Black;
//   }
//}
