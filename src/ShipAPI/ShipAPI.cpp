#include "shipAPI.h"
#include "StaticFiles.h"
#include "../IDs.h"

WiFiServer server(80);
Application app;

ShipAPI *localShipAPI;
bool isShipAPIDef = false;

ShipAPI::ShipAPI() {}

void ShipAPI::init()
{
    if (!isShipAPIDef)
    {
        app.use(staticFiles()); //Підключення React.js UI

        ////Adding API endpoints
        app.get("/api/charge-level", &getChargeLevel);
        app.get("/api/valueTurn", &setValueTurn);
        app.get("/api/valueRun", &setValueRun);
        app.get("/control", &static_index);
        app.get("/indexes", &static_index);
        app.get("/settings", &static_index);
        app.notFound(&static_index);

        server.begin(); //Запуск WEB сервера

        localShipAPI = this;
        isShipAPIDef = true;
    }
}

void ShipAPI::begin()
{
    WiFiClient client = server.available();
    if (client.connected())
    {
        app.process(&client);
    }
}

String queryParse(Request &req, char *query)
{
    char valueBuf[5];
    req.query(query, valueBuf, 5);
    return String(valueBuf);
}

/////// Handlers //////

void getChargeLevel(Request &req, Response &res)
{
    res.print(String(localShipAPI->controller.get(ID_CHARGE_LEVEL)));
    res.status(200);
}

void setValueTurn(Request &req, Response &res)
{
    localShipAPI->controller.set(ID_MAIN_HELM, queryParse(req, "valueTurn"));
    res.status(200);
}

void setValueRun(Request &req, Response &res)
{
    localShipAPI->controller.set(ID_MAIN_MOTOR, queryParse(req, "valueRun"));
    res.status(200);
}