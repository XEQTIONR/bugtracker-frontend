import { createStore } from 'redux'
import AuthReducer from './reducers/AuthReducer'


const store = createStore(AuthReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store