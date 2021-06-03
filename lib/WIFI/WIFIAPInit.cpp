#include "WIFIAPInit.h"

void WIFIAPInit(char * _ssid, char * _passw) {
     WiFi.mode(WIFI_AP);                 
     WiFi.softAP(_ssid, _passw);
     Serial.println("Inited Wi-Fi AP!");
     Serial.println("IP address: " + WiFi.softAPIP().toString());
}