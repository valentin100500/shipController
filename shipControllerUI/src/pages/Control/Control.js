import React from 'react'
import classes from './Control.module.scss'
import ControlBoxContainer from "../../components/ControlBox/ControlBoxContainer";

const Control = (props) => {
    return (
        <div className={classes.control}>
            <ControlBoxContainer />
        </div>
    )
}

Control.propTypes = {}

export default Control
