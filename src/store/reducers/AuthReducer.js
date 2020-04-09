const AuthReducer = (state = {authState : false}, action) => {

  switch(action.type){

    case 'SET_AUTH_STATE' :
      return {authState : true};


    case 'SET_AUTH_FAILED_STATE' :

    case 'SET_LOGOUT_STATE' :

    default :
      return {authState : false};
  }

}

export default AuthReducer