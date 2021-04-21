import React from "react";
import classes from "./Button.module.scss"

const Button = ({enabledIcon, disabledIcon, isEnabled, type, onClick}) => {
    let Icon
    if (type === undefined) {
        if (isEnabled) {
            Icon = enabledIcon
        }
        else {
            Icon = disabledIcon
        }
    }
    else {

    }
    return (
        <div className={classes.buttonContainer} onClick={() => {
            onClick(!isEnabled ? true : false);
        }}>
            <div className={classes.title}>
                Камера
            </div>
            <Icon
                className={classes.icon}
                style={{fontSize: 80}}/>
        </div>
    )
}

export default Button
