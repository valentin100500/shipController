import {
    RUN_VALUE_QUEST_UPDATE,
    RUN_VALUE_UPDATE,
    SET_CHARGE_LEVEL, SET_IS_DISCONNECTED,
    SET_REQUEST_RUN_FALSE,
    SET_REQUEST_RUN_TRUE,
    SET_REQUEST_TURN_FALSE,
    SET_REQUEST_TURN_TRUE,
    TURN_VALUE_QUEST_UPDATE,
    TURN_VALUE_UPDATE,
    SET_IS_TRANSLATED_VIDEO, SET_IS_INIT_GET_CHARGE
} from "./types";
import {Action} from "./actions";

type State = {
    chargeLevel: number | undefined,
    runValue: number,
    turnValue: number,
    runValueQuest: number,
    isRequestedRun: boolean,
    turnValueQuest: number,
    isRequestedTurn: boolean,
    isTranslatedVideo: boolean,
    isInitGetCharge: boolean,
    isDisconnected: boolean,
    temperature: {
        motor: | undefined,
        regulator: | undefined
    }
}

const initialState: State = {
    chargeLevel: undefined,
    runValue: 0,
    turnValue: 0,
    runValueQuest: 0,
    isRequestedRun: true,
    turnValueQuest: 0,
    isRequestedTurn: true,
    isTranslatedVideo: true,
    isDisconnected: false,
    isInitGetCharge: false,
    temperature: {
        motor: undefined,
        regulator: undefined
    }
}

const reducer = (state: State = initialState, action: Action | any): State => {
    switch (action.type) {
        case RUN_VALUE_UPDATE:
            return {
                ...state,
                runValue: action.payload
            }
        case TURN_VALUE_UPDATE:
            return {
                ...state,
                turnValue: +action.payload
            }
        case SET_CHARGE_LEVEL:
            return {
                ...state,
                chargeLevel: +action.payload
            }
        case RUN_VALUE_QUEST_UPDATE:
            return {
                ...state,
                runValueQuest: +action.payload
            }
        case SET_REQUEST_RUN_FALSE:
            return {
                ...state,
                isRequestedRun: false
            }
        case SET_REQUEST_RUN_TRUE:
            return {
                ...state,
                isRequestedRun: true
            }
        case TURN_VALUE_QUEST_UPDATE:
            return {
                ...state,
                turnValueQuest: +action.payload
            }
        case SET_REQUEST_TURN_FALSE:
            return {
                ...state,
                isRequestedTurn: false
            }
        case SET_REQUEST_TURN_TRUE:
            return {
                ...state,
                isRequestedTurn: true
            }
        case SET_IS_DISCONNECTED:
            return {
                ...state,
                isDisconnected: action.payload
            }
        case SET_IS_TRANSLATED_VIDEO:
            return {
                ...state,
                isTranslatedVideo: action.payload
            }
        case SET_IS_INIT_GET_CHARGE:
            return {
                ...state,
                isInitGetCharge: true
            }
        default:
            return state
    }
}

export default reducer;
