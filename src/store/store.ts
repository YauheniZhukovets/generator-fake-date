import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from "./userReducer";


const rootReducer = combineReducers({
    user: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store