import React from "react";
import Button from "./Button/Button";
import classes from "./Button.module.scss"
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';

const ButtonPanel = (props) => {
    return (
        <div className={classes.buttonPanel}>
            <Button
                isEnabled={props.isTranslatedVideo}
                onClick={props.setIsTranslatedVideo}
                disabledIcon={VideocamOffIcon}
                enabledIcon={VideocamIcon}
            />
        </div>
    )
}

export default ButtonPanel
