import React, {useState} from 'react';


import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import UserHomePage from './components/pages/UserHomePage'
import TestComp from './TestComp'
import './App.scss';
// import 'admin-lte/dist/css/adminlte.css'
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';


import store from "./store"
// import {setAuthState}  from "./store/actions"

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
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {

    axios.defaults.withCredentials = true;

    const authState = store.getState().AuthReducer.authState

    return(
      <Router>
        <div className="App container-fluid p-0" style={{backgroundColor : '#CCC'}}>
          <ToastContainer />
          
          <Switch>
          <Route path='/' exact > <TestComp title="/  route (home)" /> </Route>
          <Route path='/home' exact > <UserHomePage /> </Route>
          <Route path='/login' exact > <LoginPage /> </Route>
          <PrivateRoute path='/test' cond={authState}> <TestComp title="/test route" /></PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
