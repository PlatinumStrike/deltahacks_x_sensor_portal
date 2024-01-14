#include <Arduino.h>
#include "DHT_Async.h"

/* Uncomment according to your sensortype. */
#define DHT_SENSOR_TYPE DHT_TYPE_11

static const int DHT_SENSOR_PIN = 2;
DHT_Async dht_sensor(DHT_SENSOR_PIN, DHT_SENSOR_TYPE);

int sensorAnalogPin = A0;    // Select the Arduino input pin to accept the Sound Sensor's analog output 
//int sensorDigitalPin = 0;  // Commented out as it's not being used in this code
int Led13 = 13;              // Define LED port; this is the LED built into the Arduino (labeled L)

unsigned long timeDelay = 200;
unsigned long lastOutPutTime = 0;

void setup(){
  Serial.begin(9600);
  pinMode(sensorAnalogPin, INPUT);  // Corrected pin mode for analog sensor
}

static bool measure_sound(float *sound){
  *sound = analogRead(sensorAnalogPin);  // Corrected parameter assignment
  return true;
}

void loop(){
  float temperature = 0;
  float humidity = 0;
  float sound = 0;
  float avgTemperature = 0;
  float avgHumidity = 0;
  float avgSound = 0;
  int done = 5;

  if (millis() - lastOutPutTime > timeDelay){
    lastOutPutTime = millis();
    while (done != 0){
      if (dht_sensor.measure(&temperature, &humidity) && measure_sound(&sound)){  // Corrected logical operator
        avgTemperature += temperature;
        avgHumidity += humidity;
        avgSound += sound;
        done -= 1;
        delay(50);
      }
    }
    double db = 20. * (log10 (avgSound));
    avgTemperature = avgTemperature/5;
    avgHumidity = avgHumidity/5;
    avgSound = avgSound/5;
    Serial.print(millis());
    Serial.print(" ");
    Serial.print(avgTemperature);
    Serial.print(" ");
    Serial.print(avgHumidity);
    Serial.print(" ");
    Serial.println(db);  // Changed from print to println for a new line
  }
}
