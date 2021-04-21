import {withStyles} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import React from "react";

export const PrettoSlider = withStyles({
    root: {
        color: '#676363'
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -20,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 10px)',
    },
    track: {
        width: 8,
        borderRadius: 4,
    },
    rail: {
        width: 8,
        borderRadius: 4,
    },
})(Slider);
