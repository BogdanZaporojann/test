import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import {questionReducer} from "./reducers/questionReducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    questions: questionReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));