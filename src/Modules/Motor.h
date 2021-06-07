#ifndef MOTOR_SHIP
#define MOTOR_SHIP

#include "../Controller/ModuleShip.h"
#include <ESP32Servo.h>

class Motor : public ModuleShip
{
private:
    int mapingValue(int);
    Servo servo;

public:
    Motor(String, uint8_t);
    ~Motor() {}
    void set(String value) override;
    String get() override;
};

#endif