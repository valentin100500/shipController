#include "Helm.h"

Helm::Helm(String id, uint8_t pin) : ModuleShip(id)
{
    pinMode(pin, OUTPUT);
    this->servo.attach(pin);
    set("0");
}

int Helm::mapingRunValue(int value)
{
    return map(value, -10, 10, 0, 180);
}

void Helm::set(String value)
{
    this->servo.write(mapingRunValue(value.toInt()));
    Serial.println("Value of helm: " + value);
}

String Helm::get()
{
    return String(this->servo.read());
}
