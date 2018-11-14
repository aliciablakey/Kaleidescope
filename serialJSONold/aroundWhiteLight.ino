
// This function runs over and over, and is where you do the magic to light
// your leds.
void loopWhiteLight() {
   // Move a single white led
   for(int whiteLed = 0; whiteLed < NUM_LEDS; whiteLed = whiteLed + 1) {

      leds[whiteLed] = CRGB::White;

      // Show the leds (only one of which is set to white, from above)
      FastLED.show();

      // Wait a little bit
      delay(100);

      // Turn our  led back to black for the next loop around
      leds[whiteLed] = CRGB::Black;
   }
}
