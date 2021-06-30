import {combineReducers} from 'redux'
import { actionReducer } from './actionReducer'

export const myReducer = combineReducers({
  
    reducer: actionReducer,
 
})