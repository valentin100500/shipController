import React from 'react'
import classes from './Settings.module.scss'
import ButtonPanelContainer from "../../components/Home/ButtonPanel/ButtonPanelContainer";

const Settings = (props) => {
    return(
        <div className={classes.page}>
            <ButtonPanelContainer />
        </div>
    )
}

Settings.propTypes = {

}

export default Settings
