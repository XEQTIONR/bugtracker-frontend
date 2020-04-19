import AuthReducer from './AuthReducer'
import ProjectReducer from './ProjectReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  AuthReducer,
  ProjectReducer
})

export default allReducers

