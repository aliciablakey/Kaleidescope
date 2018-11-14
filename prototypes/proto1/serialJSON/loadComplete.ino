
// This function runs over and over, and is where you do the magic to light
// your leds.
void loadComplete()
{
   // Move a single white led
   for(int whiteLed = 0; whiteLed < NUM_LEDS; whiteLed = whiteLed + 1) {

      leds[whiteLed] = CRGB::White;

      // Show the leds (only one of which is set to white, from above)
      FastLED.show();

      // Wait a little bit
      delay(10);

      // Turn our  led back to black for the next loop around
      leds[whiteLed] = CRGB::Black;
   }
}

void rValToLight() {
        int val = jVal2;
        int numLedsToLight = map(val, 0, 255, 0, NUM_LEDS);

        // First, clear the existing led values
        FastLED.clear();
        for(int led = 0; led < numLedsToLight; led++) {
            leds[led] = CRGB::Blue;
        }
        FastLED.show();
}

void voiceToLight() {
        int val = jVal3;
        int numLedsToLight = map(val, 0, 255, 0, NUM_LEDS);

        // First, clear the existing led values
        FastLED.clear();
        for(int led = 0; led < numLedsToLight; led++) {
            leds[led] = CRGB::Blue;
        }
        FastLED.show();
}
