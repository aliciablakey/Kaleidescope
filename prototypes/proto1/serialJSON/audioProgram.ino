//#include <FastLED.h>
//
//CRGBPalette16 currentPalette;
//TBlendType    currentBlending;
//
//extern CRGBPalette16 myRedWhiteBluePalette;
//extern const TProgmemPalette16 myRedWhiteBluePalette_p PROGMEM;
//
//
//void initColorPallette() {
//    FastLED.addLeds<LED_TYPE, DATA_PIN, COLOR_ORDER>(leds, NUM_LEDS).setCorrection( TypicalLEDStrip );
//    FastLED.setBrightness(  BRIGHTNESS );
//
//    currentPalette = RainbowColors_p;
//    currentBlending = LINEARBLEND;
//}
//
//
//void loopColorPallete()
//{
//    ChangePalettePeriodically();
//
//    static uint8_t startIndex = 0;
//    startIndex = startIndex + 1; /* motion speed */
//
//    FillLEDsFromPaletteColors( startIndex);
//
//    FastLED.show();
//    FastLED.delay(1000 / UPDATES_PER_SECOND);
//}
//
//void FillLEDsFromPaletteColors( uint8_t colorIndex)
//{
//    uint8_t brightness = 255;
//
//    for( int i = 0; i < NUM_LEDS; i++) {
//        leds[i] = ColorFromPalette( currentPalette, colorIndex, brightness, currentBlending);
//        colorIndex += 3;
//    }
//}
