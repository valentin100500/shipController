import React from "react";
import {connect} from "react-redux";
import ControlBox from "./ControlBox";
import {
    onPointerUpRun,
    onPointerUpTurn,
    setChargeLevel, setIsInitGetCharge, setIsTranslatedVideo,
    setRequestRunFalse,
    setRequestRunTrue,
    setRequestTurnFalse,
    setRequestTurnTrue,
    setRunValueQuest, setTurnValueQuest, setValueRun, setValueTurn
} from "../../redux/actions";
import {getChargeLevelThunkCreator, setRunValueThunkCreator, setTurnValueThunkCreator} from "../../redux/thunks";


const mapDispatchToProps = {
    setRequestRunFalse,
    setRequestRunTrue,
    setRunValueQuest,
    setRequestTurnFalse,
    setRequestTurnTrue,
    setTurnValueQuest,
    setChargeLevel,
    setValueRun,
    setValueTurn,
    onPointerUpTurn,
    onPointerUpRun,
    getChargeLevel: getChargeLevelThunkCreator,
    setRunValueThunkCreator,
    setTurnValueThunkCreator,
    setIsInitGetCharge
}
const mapStateToProps = (state) => {
    return {
        valueTurn: state.state.turnValue,
        valueRun: state.state.runValue,
        chargeLevel: state.state.chargeLevel,
        translateVideo: state.state.translateVideo,
        runValueQuest: state.state.runValueQuest,
        isRequestedRun: state.state.isRequestedRun,
        turnValueQuest: state.state.turnValueQuest,
        isRequestedTurn: state.state.isRequestedTurn,
        isDisconnected: state.state.isDisconnected,
        isTranslatedVideo: state.state.isTranslatedVideo,
        isInitGetCharge: state.state.isInitGetCharge
    }
}
const ControlBoxContainer = connect(mapStateToProps, mapDispatchToProps)(class extends React.Component {
    componentDidMount() {
        if (!this.props.isInitGetCharge)
        {
            this.props.getChargeLevel()
            setInterval(() => {
                this.props.getChargeLevel()
            }, 15000)
            this.props.setIsInitGetCharge()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isRequestedRun && (+this.props.runValueQuest !== +this.props.valueRun)) {
            this.props.setRunValueThunkCreator(this.props.valueRun)
        }
        if (this.props.isRequestedTurn && (+this.props.turnValueQuest !== +this.props.valueTurn)) {
            this.props.setTurnValueThunkCreator(this.props.valueTurn)
        }
    }

    render() {
        const onKeyPress = (key) => {
            let valueRun;
            switch (key) {
                case "1":
                    valueRun = 5
                    break;
                case "2":
                    valueRun = 10
                    break;
                case "3":
                    valueRun = 18
                    break;
                case "4":
                    valueRun = 30
                    break;
                case "r":
                    valueRun = -20
                    break;
                default:
                    return null
            }
            this.props.setValueRun(valueRun)
        }
        const onKeyUp = (key) => {
            if (key === "1" || key === "2" || key === "3" || key === "4"|| key === "r") {
                this.props.onPointerUpRun()
            }
        }
        return <ControlBox onPointerUpRun={this.props.onPointerUpRun}
                           onPointerUpTurn={this.props.onPointerUpTurn}
                           onKeyUp={onKeyUp}
                           onKeyPress={onKeyPress}
                           setValueRun={this.props.setValueRun}
                           setValueTurn={this.props.setValueTurn}
                           translateVideo={this.props.translateVideo}
                           valueRun={this.props.valueRun}
                           valueTurn={this.props.valueTurn}
                           chargeLevel={this.props.chargeLevel}
                           isDisconnected={this.props.isDisconnected}
                           isTranslatedVideo={this.props.isTranslatedVideo}
        />
    }
})
export default ControlBoxContainer
