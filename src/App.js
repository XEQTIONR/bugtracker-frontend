import React, {Component} from 'react';


import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import TestComp from './TestComp'
import './App.scss';
// import 'admin-lte/dist/css/adminlte.css'
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';

function PrivateRoute({ children, cond, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        cond ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

class App extends Component {

  constructor(props){
    super(props);

    axios.defaults.withCredentials = true;

    this.state = { logged_in : false, email : null }

    this.updateAuthState = this.updateAuthState.bind(this)

  }

  updateAuthState(callback_state){
    this.setState({ logged_in : callback_state });
  }
  
  render(){

    return(
      <Router>
        <div className="App container-fluid" style={{backgroundColor : '#CCC'}}>
          <ToastContainer />
          <Switch>
          <Route path='/' exact > <LoginPage loggedInStateChange={this.updateAuthState} /> </Route>
          <PrivateRoute path='/test' cond={this.state.logged_in}> <TestComp /></PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
