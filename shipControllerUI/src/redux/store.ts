import {applyMiddleware, combineReducers, compose, createStore, Reducer, Store} from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const reducers: Reducer = combineReducers({
    state: reducer
});

const enhancer = compose(
    applyMiddleware(thunkMiddleware),
)

const store: Store = createStore(reducers, enhancer);

export default store;
