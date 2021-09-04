import { combineReducers } from 'redux'
import session from './session'
import userReducer from './users'

export default combineReducers({
    entities: session,
    user: userReducer
})