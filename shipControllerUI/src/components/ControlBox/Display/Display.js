import React from 'react'
import classes from './Display.module.scss'
import PropTypes from 'prop-types'

const Display = (props) => {
    const style = {
        background: "#efebeb"
    }
    return (
        <>
            <div
                className={classes.display}
                style={{...props.style, ...style}}
            >
                {props.isTranslatedVideo && <img
                    src="http://192.168.4.200/cam.mjpeg"
                    width="100%"
                    height="100%"
                />}
            </div>
        </>
    )
}

Display.propTypes = {
    translateVideo: PropTypes.bool
}

export default Display
