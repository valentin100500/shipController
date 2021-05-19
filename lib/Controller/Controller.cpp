#include "Controller.h"

void Controller::use(ModuleShip *module)
{
    this->modules.push_back(module);
}

void Controller::set(String ID, String value)
{
    for (size_t i = 0; i < this->modules.size(); i++)
    {
        if (this->modules[i]->getID() == ID)
        {
            this->modules[i]->set(value);
        }
    }
}

String Controller::get(String ID)
{
    for (size_t i = 0; i < this->modules.size(); i++)
    {
        if (this->modules[i]->getID() == ID)
        {
            return this->modules[i]->get();
        }
    }
    throw std::invalid_argument("Invalid module ID!");
}