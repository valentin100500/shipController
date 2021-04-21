import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    state: reducer
});

const enhancer = compose(
    applyMiddleware(thunkMiddleware),
    // persistState,
)

const store = createStore(reducers, enhancer);

export default store;
