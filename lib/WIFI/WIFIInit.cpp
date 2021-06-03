#include "WIFIInit.h"

void WiFiInit(String _ssid, String _passwd)
{
  WiFi.mode(WIFI_STA);
  WiFi.begin(_ssid.c_str(), _passwd.c_str());

  Serial.println(String("Conecting to ") + _ssid);
  Serial.println();

  byte tries = 10;

  while (--tries && WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(1000);
  }
  Serial.println("\n");

  if (WiFi.status() == WL_CONNECTED)
  {
    Serial.println("WiFI conected!");
    Serial.println("IP address: " + WiFi.softAPIP().toString());
    // Serial.println("IP address: " + WiFi.);
  }
  else
  {
    Serial.println("Error! Not connection on " + _ssid + "!");
    Serial.println();
    try
    {
      WIFIAPInit(_ssid, _passwd);
      Serial.println("Inited Wi-Fi AP!");
      Serial.println("IP address: " + WiFi.softAPIP().toString());
    }
    catch (const std::exception &e)
    {
      Serial.println(e.what() + '\n');
    }
  }
  Serial.println("IP address: " + WiFi.localIP().toString());
}

void WiFiInit(wifi_mode_t mode, String _ssid, String _passw)
{
  if (mode == WIFI_AP)
  {
    WIFIAPInit(_ssid, _passw);
  }
}