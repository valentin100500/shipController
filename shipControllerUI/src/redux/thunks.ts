import * as axios from "axios";
import {
    setChargeLevel,
    setRequestRunFalse,
    setRequestRunTrue,
    setRequestTurnFalse, setRequestTurnTrue,
    setRunValueQuest,
    setTurnValueQuest,
} from "./actions";
import {Dispatch} from "redux";

export const getChargeLevelThunkCreator = () => (dispatch: Dispatch) => {
    //@ts-ignore
    axios.get(`${process.env.NODE_ENV ? "http://192.168.4.1" : ""}/api/charge-level`)
        .then((response: any) => {
            dispatch(setChargeLevel(response.data))
        })
        .catch((e: any) => {
            dispatch(setChargeLevel(undefined))
        })
}
export const setRunValueThunkCreator = (valueRun: number) => (dispatch: Dispatch) => {
    dispatch(setRunValueQuest(valueRun))
    dispatch(setRequestRunFalse())
    // @ts-ignore
    axios( `${process.env.NODE_ENV ? "http://192.168.4.1": ""}/api/valueRun?valueRun=${valueRun}`)
        .then(() => {
            dispatch(setRequestRunTrue())
        })
}

export const setTurnValueThunkCreator = (valueTurn: number) => (dispatch: Dispatch) => {
    dispatch(setTurnValueQuest(valueTurn))
    dispatch(setRequestTurnFalse())

    // @ts-ignore
    axios(`${process.env.NODE_ENV ? "http://192.168.4.1": ""}/api/valueTurn?valueTurn=${valueTurn}`)
        .then(() => {
            dispatch(setRequestTurnTrue())
        })
}
