import React from "react";

import {
    setIsTranslatedVideo,
} from "../../../redux/actions";
import {connect} from "react-redux";
import ButtonPanel from "./ButtonPanel";

const mapDispatchToProps = {
    setIsTranslatedVideo
}
const mapStateToProps = (state) => {
    return {
        isTranslatedVideo: state.state.isTranslatedVideo
    }
}

const ButtonPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonPanel)

export default ButtonPanelContainer
