#ifndef CONTROLLER
#define CONTROLLER

#include <Arduino.h>
#include "ModuleShip.h"
#include <stdexcept>

class Controller
{
private:
    std::vector<ModuleShip *> modules;

public:
    Controller() {}
    void use(ModuleShip *servo);
    void init();
    void set(String ID, String value);
    String get(String ID);
};

#endif