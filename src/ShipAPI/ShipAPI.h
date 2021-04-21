#ifndef SHIP_API
#define SHIP_API

#include <aWOT.h>
#include <WiFi.h>
#include "../Controller/Controller.h"

class ShipAPI
{
private:
public:
    ShipAPI();
    void init ();
    Controller controller;
    void begin();
};


/////// Handlers //////

void getChargeLevel (Request &req, Response &res);

void setValueTurn(Request &req, Response &res);

void setValueRun(Request &req, Response &res);

#endif