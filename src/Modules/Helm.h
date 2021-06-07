#ifndef HELM_SHIP
#define HELM_SHIP

#include "../Controller/ModuleShip.h"
#include "ESP32Servo.h"

class Helm : public ModuleShip
{
private:
    int mapingValue(int);
    Servo servo;

public:
    Helm(String, uint8_t);
    ~Helm() {}
    void set(String value) override;
    String get() override;
};

#endif