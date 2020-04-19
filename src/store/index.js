import { createStore } from 'redux'
import allReducers from './reducers' 
import { setAuthCachedState } from './actions'
function saveToLocalStorage(state){

  try{

    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)

  } catch(e){
    console.log("CATCH SAVING TO LOCAL STORAGE")
    console.log(e)
  }
}

function loadFromLocalStorage(){

  console.log("TRY TO loadFromLocalStorage")
  try{
    const serializedState = localStorage.getItem('state')
    if(serializedState == null) return undefined
    return JSON.parse(serializedState)
  }
  catch(e){
    console.log("CATCH localFromLocalStorage")
    console.log(e)
    return undefined //****/
  }
}



const persistedState = loadFromLocalStorage();


const store = createStore(allReducers, 
                          persistedState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())




store.subscribe(() => saveToLocalStorage(store.getState()))

if(persistedState!=undefined) 
{ 
  console.log("set CACHED STATE")
  console.log(persistedState);
  store.dispatch( setAuthCachedState(persistedState.AuthReducer))
}
  




export default store