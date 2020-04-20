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

const setAuthCachedState = (params) =>
{
  return {
    type : 'SET_AUTH_CACHED_STATE',
    payload : params
  }
}

const setLogoutState = (param) =>{
  
  return {
    type : 'SET_LOGOUT_STATE',
  
  }
}


const setProjectState = (param) =>{
  
  return {
    type : 'SET_PROJECTS_STATE',
    payload : {projects : param.projects}
  }
}

const setCurrentProjectState = (param) => {
  return {
    type : 'SET_CURRENT_PROJECT_STATE',
    payload : {current_project : param.current_project}
  }
}

module.exports = {
  setAuthState,
  setAuthFailedState,
  setAuthCachedState,
  setLogoutState,
  setProjectState,
  setCurrentProjectState
}