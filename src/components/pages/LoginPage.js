import React, {Component} from 'react';
import Login from "../modules/Login";

class LoginPage extends Component{

  constructor(props){
    super(props)
  }

  render(){
    
    return(
      // <div style={{marginTop: '20vh'}} className="row justify-content-center">
      <div style={{height : '100vh'}}  className="d-flex flex-row justify-content-center align-items-center" >
          <div style={{maxWidth : '700px'}} className="col-md-8 col-xl-5 mb-lg-5 ">
            <Login />
          </div>
            
      </div>
    )
  }
}

export default LoginPage