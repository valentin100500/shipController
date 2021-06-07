#include "Motor.h"

Motor::Motor(String id, uint8_t pin) : ModuleShip(id)
{
    pinMode(pin, OUTPUT);
    this->servo.attach(pin, 1100, 2000);
}

int Motor::mapingValue(int value)
{
    return map(value, -20, 30, 1100, 2000);
}

void Motor::set(String value)
{
    this->servo.writeMicroseconds(mapingValue(value.toInt()));
}

String Motor::get()
{
    return String(this->servo.readMicroseconds());
}
