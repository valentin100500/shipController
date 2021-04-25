import {setChargeLevel, setRequestRunFalse, setRequestRunTrue, setValueRun} from "./actions";
import reducer, {initialState} from "./reducer";

describe("Reducer:", ()=> {
    test("Reducer should return to the state with the isRequestedRun field", () => {
        expect(reducer({...initialState, isRequestedRun: true}, setRequestRunFalse()).isRequestedRun).toBe(false);
        expect(reducer({...initialState, isRequestedRun: false}, setRequestRunTrue()).isRequestedRun).toBe(true);
    })
    test("Reducer should return to the state with the chargeLevel field", () => {
        expect(reducer({...initialState}, setChargeLevel(10)).chargeLevel)
            .toBe(10);
        expect(reducer({...initialState, chargeLevel: 10}, setChargeLevel(100)).chargeLevel)
            .toBe(100);
    })
    test("Reducer should return to the state with the runValue field", () => {
        expect(reducer({...initialState}, setValueRun(10)).runValue)
            .toBe(10);
        expect(reducer({...initialState, runValue: 10}, setValueRun(100)).runValue)
            .toBe(100);
    })
})
