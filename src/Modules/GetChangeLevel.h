#ifndef GET_CHANGE_LEVEL
#define GET_CHANGE_LEVEL
#define DEVELOP

#include "../Controller/ModuleShip.h"
#include <driver/adc.h>

class GetChangeLevel: public ModuleShip
{
private:
    float v_min = 3.2;
    float v_max = 4.3;
    float multiplier = 0.25;
    uint8_t port; 
public:
    GetChangeLevel(String, uint8_t port);
    void setArg(const float,const float,const float);
    void setMultiplier(const float);
    String get() override; 
    void set(String value);
};

GetChangeLevel::GetChangeLevel(String id, uint8_t port): ModuleShip(id){
    this->port = port;
    adc1_config_width(ADC_WIDTH_12Bit);
    adc1_config_channel_atten(ADC1_CHANNEL_0, ADC_ATTEN_DB_0);
};

void GetChangeLevel::setArg(const float v_min, const float v_max, const float multiplier)
{
    this->v_min = v_min;
    this->v_max = v_max;
    this->multiplier = multiplier;
}

String GetChangeLevel::get()
{
    float sum = 0;
    for (size_t i = 0; i < 50; i++)
    {
        sum+=adc1_get_raw(ADC1_GPIO34_CHANNEL);
        delay(1);
    }
    
    float Vbat = (sum / 50)/1.1 / 1000;
    float output = roundf((Vbat / multiplier - v_min) / (v_max - v_min) * 100);

    #ifdef DEVELOP
        Serial.println("Voltage: " + String(Vbat));
        Serial.println("Pin: " + String (sum / 50));
        Serial.println("Output: " + String (output));
    #endif

    return String(output);
}

void GetChangeLevel::set(String value){}

void GetChangeLevel::setMultiplier(const float multiplier)
{
    this->multiplier = multiplier;
}

#endif