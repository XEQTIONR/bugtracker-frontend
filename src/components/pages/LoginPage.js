import React, {Component} from 'react';
import Login from "../modules/Login";
import Test from "../../TestComp";
import store from "../../store"

import {Link, Redirect, useHistory, useLocation} from 'react-router-dom';
function LoginPage(){

  // constructor(props){
  //   super(props)
  // }

  // render(){

  let history = useHistory();
  let location = useLocation();

  console.log("store")

  let strr = store.getState()

  console.log(strr.AuthReducer.authState)
 
  //console.log(location)

  


  let { from } = location.state || { from: { pathname: "/" } };
  
  console.log('from')
  console.log(from)


  if( strr.AuthReducer.authState && from.pathname!="/")
  {
    history.replace(from);
    return(
      <Redirect to={from} />

    )
  }


    return(
      // <div style={{marginTop: '20vh'}} className="row justify-content-center">
      <div style={{height : '100vh'}}  className="d-flex flex-column justify-content-center   align-items-center" >
          
          <h2 className="mb-3">BugtrackR</h2>
          <div style={{maxWidth : '500px'}} className="col-md-8 col-xl-5 ">
            <Login />
          </div>
      </div>
    )
  // }
}

export default LoginPage