const setAuthState = (param) =>{
  
  return {
    type : 'SET_AUTH_STATE',
    payload : {email : param.email, name : param.name}
  }
}

const setAuthFailedState = (params) => {
  return {
    type : 'SET_AUTH_FAILED_STATE',
    payload : {email : params.email}
  }
}

module.exports = {
  setAuthState,
  setAuthFailedState
}