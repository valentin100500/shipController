import React from 'react'
import classes from './Battery.module.scss'
import {
    Battery20,
    Battery30,
    Battery50,
    Battery60,
    Battery80,
    Battery90,
    BatteryAlert,
    BatteryFull,
    BatteryUnknown
} from "@material-ui/icons";

const Battery = (props) => {
    let
        BattryComponent,
        color;
    const {chargeLevel, className} = props

    if (chargeLevel < 10) {
        BattryComponent = BatteryAlert;
        color = "#FF121C"
    } else if (chargeLevel < 25) {
        BattryComponent = Battery20;
        color = "#FF121C"
    } else if (chargeLevel < 40) {
        BattryComponent = Battery30;
        color = "#f3d41e"
    } else if (chargeLevel < 55) {
        BattryComponent = Battery50;
        color = "#53dd2f"
    } else if (chargeLevel < 70) {
        BattryComponent = Battery60;
        color = "#53dd2f"
    } else if (chargeLevel < 85) {
        BattryComponent = Battery80;
        color = "#53dd2f"
    } else if (chargeLevel < 95) {
        BattryComponent = Battery90;
        color = "#53dd2f"
    } else if (chargeLevel >= 95) {
        BattryComponent = BatteryFull;
        color = "#53dd2f"
    } else {
        BattryComponent = BatteryUnknown;
        color = "#ea8506"
    }

    return (
        <BattryComponent
            className={[classes.battery,className].join(" ")}
            style={{color: color}}
            fontSize='large'
        />
    )
}

export default Battery
