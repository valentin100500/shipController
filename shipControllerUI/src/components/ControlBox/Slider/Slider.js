import React from "react";
import PropTypes from 'prop-types'
import classes from './Slider.module.scss'

const Slider = (props) => {
    const {onChange, value, onPointerUp, style, min, max, className} = props
    return (
        <input
            style={style}
            type='range'
            value={value}
            min={min}
            max={max}
            onChange={(e) => onChange(e.target.value)}
            onTouchEnd={onPointerUp}
            onPointerUp={onPointerUp}
            className={[classes.slider,className].join(" ")}
        />
    )
}

Slider.propTypes = {
    onChange: PropTypes.func,
    onPointerUp: PropTypes.func,
    value: PropTypes.number,
    style: PropTypes.object,
    min: PropTypes.number,
    max: PropTypes.number,
    orient: PropTypes.string
}

export default Slider
