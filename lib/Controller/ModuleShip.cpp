#include "ModuleShip.h"
ModuleShip::ModuleShip(String id){
    this->id = id;
}

String ModuleShip::getID(){
    return this->id;
}