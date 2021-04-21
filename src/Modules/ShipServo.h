#ifndef MOTOR_SHIP
#define MOTOR_SHIP

#include "../Controller/ModuleShip.h"
#include <ESP32Servo.h>

class ShipServo: public ModuleShip
{
private:
    int mapingRunValue(int);
    Servo servo;
public:
    ShipServo(String, uint8_t);
    ~ShipServo(){}
    void set(String value) override;
    String get() override;
};

#endif