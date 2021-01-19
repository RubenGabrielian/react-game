import { combineReducers } from 'redux'
import { testReducer } from './testReducer'
import { gameAreaReducer } from './gameAreaReducer'

export const reducers = combineReducers({
    testReducer,
    gameAreaReducer
})