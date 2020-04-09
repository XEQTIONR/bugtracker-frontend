import React, {useState} from 'react';


import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
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
              pathname: "/",
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


    return(
      <Router>
        <div className="App container-fluid" style={{backgroundColor : '#CCC'}}>
          <ToastContainer />
          
          <Switch>
          <Route path='/' exact > <LoginPage /> </Route>
          <PrivateRoute path='/test' cond={store.getState().authState}> <TestComp /></PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
