const AuthReducer = (state, action) => {

  switch(action.type){

    case 'SET_AUTH_CACHED_STATE' :
      return action.payload;

    case 'SET_AUTH_STATE' :
      return {authState : true, email : action.payload.email, authStatus: 'authenticated'};


    case 'SET_AUTH_FAILED_STATE' :
      return {authState : false, email : action.payload.email, authStatus : 'authentication-failed'};

    case 'SET_LOGOUT_STATE' :

     default :
      return {authState : false , email: '', authStatus : 'unauthenticated'};
  }

}

export default AuthReducer