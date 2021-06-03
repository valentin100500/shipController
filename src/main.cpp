#define DEVELOP

#include <Arduino.h>
#include <WIFIInit.h>
#include "Modules/Modules.h"
#include "ShipAPI/ShipAPI.h"
#include "IDs.h"

const char *ssid = "shipController";
const char *password = "";

Motor motor = Motor(ID_MAIN_MOTOR, 19);
Helm helm = Helm(ID_MAIN_HELM, 18);

ShipAPI shipAPI = ShipAPI();
GetChangeLevel chLevel = GetChangeLevel(ID_CHARGE_LEVEL, 34);

void setup()
{
  Serial.begin(115200);
  WiFiInit(WIFI_AP, ssid, password); //Ініціалізація Wi-fi AP

  shipAPI.controller.use(&helm);
  shipAPI.controller.use(&motor);
  shipAPI.controller.use(&chLevel);
  shipAPI.init();
}

void loop()
{
  shipAPI.begin();
}