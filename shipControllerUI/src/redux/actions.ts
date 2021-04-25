import {
    RUN_VALUE_QUEST_UPDATE,
    RUN_VALUE_UPDATE,
    SET_CHARGE_LEVEL,
    SET_REQUEST_RUN_FALSE,
    SET_REQUEST_RUN_TRUE,
    SET_REQUEST_TURN_FALSE,
    SET_REQUEST_TURN_TRUE,
    TURN_VALUE_QUEST_UPDATE,
    TURN_VALUE_UPDATE,
    SET_IS_TRANSLATED_VIDEO, SET_IS_INIT_GET_CHARGE
} from "./types";

export type Action = {
    type: string,
    payload?: number | boolean
}

export const setRequestRunFalse = (): Action | any => ({type: SET_REQUEST_RUN_FALSE})
export const setRequestRunTrue = (): Action | any => ({type: SET_REQUEST_RUN_TRUE})
export const setRequestTurnFalse = (): Action | any => ({type: SET_REQUEST_TURN_FALSE})
export const setRequestTurnTrue = (): Action | any => ({type: SET_REQUEST_TURN_TRUE})
export const setIsInitGetCharge = (): Action | any => ({type: SET_IS_INIT_GET_CHARGE})
export const setRunValueQuest = (value: number): Action => ({type: RUN_VALUE_QUEST_UPDATE, payload: value})
export const setTurnValueQuest = (value: number): Action => ({type: TURN_VALUE_QUEST_UPDATE, payload: value})
export const setChargeLevel = (value: number | undefined): Action => ({type: SET_CHARGE_LEVEL, payload: value})
export const setValueRun = (value: number): Action => ({type: RUN_VALUE_UPDATE, payload: value})
export const setValueTurn = (value: number): Action => ({type: TURN_VALUE_UPDATE, payload: value})
export const onPointerUpTurn = (): Action => ({type: TURN_VALUE_UPDATE, payload: 0})
export const onPointerUpRun = (): Action => ({type: RUN_VALUE_UPDATE, payload: 0})
export const setIsTranslatedVideo = (isTranslated: boolean): Action => ({
    type: SET_IS_TRANSLATED_VIDEO,
    payload: isTranslated
})
