import React, {Component} from 'react';
import Login from "../modules/Login";
import Test from "../../TestComp";
import {Link} from 'react-router-dom';
class LoginPage extends Component{

  constructor(props){
    super(props)
  }

  render(){
    
    return(
      // <div style={{marginTop: '20vh'}} className="row justify-content-center">
      <div style={{height : '100vh'}}  className="d-flex flex-column justify-content-center   align-items-center" >
          
          <h2 className="mb-3">BugtrackR</h2>
          <div style={{maxWidth : '500px'}} className="col-md-8 col-xl-5 ">
            <Login onLoginStateChange={this.props.loggedInStateChange}/>
          </div>
          <div style={{maxWidth : '500px'}} className="col-md-8 col-xl-5 ">
            <Link to="/test">To test</Link>
          </div>
      </div>
    )
  }
}

export default LoginPage