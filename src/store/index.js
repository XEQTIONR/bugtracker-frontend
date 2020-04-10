import { createStore, combineReducers } from 'redux'
import AuthReducer from './reducers/AuthReducer'
import { setAuthCachedState } from './actions'
function saveToLocalStorage(state){
  try{

    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)

  } catch(e){
    console.log(e)
  }
}

function loadFromLocalStorage(){
  try{
    const serializedState = localStorage.getItem('state')
    if(serializedState == null) return undefined
    return JSON.parse(serializedState)
  }
  catch(e){
    console.log(e)
    return undefined //****/
  }
}



const persistedState = loadFromLocalStorage();

const rootReducer = combineReducers({
  AuthReducer
})


const store = createStore(rootReducer, 
                          persistedState, // INITIALIZATION DOESNT WORK
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


console.log('STORE AFTER   persistedState ')
console.log(store.getState())

store.subscribe(() => saveToLocalStorage(store.getState()))

if(persistedState!=undefined) //****/
  store.dispatch( setAuthCachedState(persistedState.AuthReducer))




export default store