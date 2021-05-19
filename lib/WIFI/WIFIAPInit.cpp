#include "WIFIAPInit.h"

const char *ssid = "shipController";
const char *password = "";

void WIFIAPInit() {
     WiFi.mode(WIFI_AP);                   
     WiFi.softAP(ssid, password);
     Serial.println("Inited Wi-Fi AP!");
     Serial.println("IP address: " + WiFi.softAPIP().toString());
}