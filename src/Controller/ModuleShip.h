#ifndef MODULE_SHIP
#define MODULE_SHIP

#include <Arduino.h>
class ModuleShip
{
private:
    String id;
public:
    ModuleShip(String id);
    ~ModuleShip(){}
    String getID();
    virtual String get() = 0;
    virtual void set(String value) = 0;
};

#endif