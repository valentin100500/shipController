#ifndef WIFI_INIT
#define WIFI_INIT

#include <WiFi.h>
#include "WIFIAPInit.h"

void WiFiInit(char *_ssid, char *_passwd);
void WiFiInit(wifi_mode_t mode, char *_ssid, char *_passwd);

#endif