import React from 'react'
import PropTypes from "prop-types";
import classes from "./ControlBox.module.scss";
import Slider from "./Slider/Slider";
import Display from "./Display/Display";
import Battery from "./Battery/Battery";

const ControlBox = (props) => {
    return (
        <>
            <div
                className={classes.controlBox}
                onKeyPress={(e) => props.onKeyPress(e.key)}
                onKeyUp={(e) => props.onKeyUp(e.key)}
            >
                <Slider
                    value={props.valueTurn}
                    onChange={props.setValueTurn}
                    onPointerUp={props.onPointerUpTurn}
                    className={classes.horizontalSlider}
                    min={-10}
                    max={10}
                />
                <Slider
                    value={props.valueRun}
                    onChange={props.setValueRun}
                    onPointerUp={props.onPointerUpRun}
                    className={classes.verticalSlider}
                    min={-20}
                    max={30}
                />
                <Display
                    isTranslatedVideo={props.isTranslatedVideo}
                />
                <Battery
                    className={classes.battery}
                    chargeLevel={props.chargeLevel}
                />
            </div>
        </>
    )
}

ControlBox.propTypes = {
    setValueRun: PropTypes.func,
    setValueTurn: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    onPointerUpTurn: PropTypes.func,
    onPointerUpRun: PropTypes.func,
    valueTurn: PropTypes.number,
    valueRun: PropTypes.number,
    translateVideo: PropTypes.bool,
    chargeLevel: PropTypes.number
}

export default ControlBox
